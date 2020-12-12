import { ItemDigitalModel } from '../item-digital-model/item-digital-model';

export class UploadModel
{
    public id: number;
    public path: string;
    public itemDigital: ItemDigitalModel;
    public fileName: string;
    public extension: string;
    public mime: string;
    public compressable: boolean;
    public pdfResolution: number;
    public pagesNumber: number;
    public processingStarted: boolean;
    public processingFinished: boolean;
    public stepAnalyzeDone: boolean;
    public stepOriginalPagesNumber: number;
    public stepOriginalDone: boolean;
    public stepCompressionBigPagesNumber: number;
    public stepCompressionBigDone: boolean;
    public stepCompressionThumbnailPagesNumber: number;
    public stepCompressionThumbnailDone: boolean;
    public stepFinishDone: boolean;
    public datumBearbeitet: string;
    public datumErstellt: string;
}
