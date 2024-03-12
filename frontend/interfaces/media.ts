export default interface CoreMediaInterface {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: null;
      width: 342;
      height: 139;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string
        }
      };
      hash: string;
      ext: string;
      mime: string;
      size: string;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string
    }
  }
}