import "react-native-gesture-handler/jestSetup";
import React, { PropsWithChildren } from "react";
import { act, fireEvent, render } from "@testing-library/react-native";
import { VideoScreen } from "..";
import { ThemeProvider } from "styled-components/native";
import { theme } from "@/shared/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "@/shared/components/layout";
import * as videoService from "../services/video.service";

const mockedVideo = {
  id: "90562",
  title: "Como alavancar vendas indiretas com parcerias, com Guilherme Tsuchida",
  created_at: "2024-06-03T19:13:49.000000Z",
  category: 1,
  hls_path:
    "https://nsm-video.netshow.me/08467dc2-8619-40a6-a38c-21384a1e529d/14e23fcb-aeb4-4e23-bb26-e130752c1b67/playlist.m3u8",
  description:
    "Descubra como empresas de todos os portes estão aproveitando estratégias de canais e vendas indiretas para impulsionar seus negócios e obter resultados excepcionais! Para falar sobre isso, convidamos Guilherme Tsuchida, responsável pelo desenvolvimento de novas parcerias estratégicas na Microsoft Américas, para abrilhantar o episódio #21 do #OverTheCast",
  thumbnail: "https://static-ott.netshow.me/sites/70/media/268999/Over-The-Cast---21.png",
  site_id: 70,
  views: 11,
  likes: 1,
};

const mockedRouteParams = {
  params: {
    id: mockedVideo.id,
  },
};

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Layout>{children}</Layout>
      </NavigationContainer>
    </ThemeProvider>
  );
};

describe("Given VideoScreen", () => {
  const navigation = { navigate: jest.fn() };

  beforeEach(async () => {
    jest.spyOn(videoService, "getVideo").mockImplementation(
      () =>
        ({
          data: mockedVideo,
        }) as any,
    );

    jest.spyOn(videoService, "patchVideo").mockImplementation(() => Promise.resolve(true) as any);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("When screen is rendered", () => {
    test("Then get videos service should be called", async () => {
      render(
        <Providers>
          <VideoScreen navigation={navigation as any} route={mockedRouteParams as any} />
        </Providers>,
      );
      await act(async () => {
        await Promise.resolve();
      });
      expect(videoService.getVideo).toHaveBeenCalledWith({ id: mockedRouteParams.params.id });
    });

    test("Then should increase video views", async () => {
      render(
        <Providers>
          <VideoScreen navigation={navigation as any} route={mockedRouteParams as any} />
        </Providers>,
      );
      await act(async () => {
        await Promise.resolve();
      });
      expect(videoService.patchVideo).toHaveBeenCalledWith({
        id: mockedRouteParams.params.id,
        video: { views: mockedVideo.views + 1 },
      });
    });
  });

  describe("When like button is clicked", () => {
    test("Then should increase video likes count", async () => {
      const { getByTestId } = render(
        <Providers>
          <VideoScreen navigation={navigation as any} route={mockedRouteParams as any} />
        </Providers>,
      );

      await act(async () => {
        await Promise.resolve();
      });
      await act(async () => {
        const LikeButton = getByTestId("like-button");
        fireEvent.press(LikeButton);
      });

      expect(videoService.patchVideo).toHaveBeenCalledWith({
        id: mockedRouteParams.params.id,
        video: { likes: mockedVideo.likes + 1 },
      });
    });
  });
});
