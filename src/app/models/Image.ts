export class Image {
    constructor(imageId: string, imageName: string, imagePath: string, ) {
        this.ImageId = imageId;
        this.ImageName = imageName;
        this.ImagePath = imagePath;
    }

    public ImageId: string
    public ImageName: string
    public ImagePath: string
}