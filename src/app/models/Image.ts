export class Image {
    constructor(imageId: string, imageName: string, imagePath: string, imageVirtualPath: string) {
        this.ImageId = imageId;
        this.ImageName = imageName;
        this.ImagePath = imagePath;
        this.ImageVirtualPath = imageVirtualPath;
    }

    public ImageId: string
    public ImageName: string
    public ImagePath: string
    public ImageVirtualPath: string
}