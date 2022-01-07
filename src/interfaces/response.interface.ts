export interface ResponseObject {
  statusCode: number;
  success: boolean;
  message: string;
  type?: string;
  data?: any;
}
