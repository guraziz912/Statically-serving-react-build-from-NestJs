import { ResponseObject } from '../interfaces/response.interface';

/**
 * function to create a valid SUCCESS response object.
 * message that has to be pass in the response object.
 */
export const createSuccessResponse = (
  message = '',
  data?,
  success = true,
): ResponseObject => {
  return {
    statusCode: 200,
    message,
    success,
    ...(data && { data }),
  };
};
