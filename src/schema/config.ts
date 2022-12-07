/**
 * You can modify this file
 *
 * @version 6
 *
 */
import Axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosInstance,
} from 'axios'
//@ts-ignore
import qs from 'qs'

const baseConfig: AxiosRequestConfig = {
  baseURL: 'https://api.av100.ru/v3', // <--- Add your base url
  headers: {
    'X-Api-Key': '8bcfb6e1-4fa8-4fae-872c-a435bbdbe8d9',
    'Content-Encoding': 'UTF-8',
    Accept: 'application/json',
    'Content-Type': 'application/json-patch+json',
  },
  // @ts-ignore
  // paramsSerializer: (param: any) => qs.stringify(param, { indices: false }),
}

let axiosInstance: AxiosInstance

function getAxiosInstance(security?: Security): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig)

    // Response interceptor
    axiosInstance.interceptors.response.use(
      (async (response: AxiosResponse): Promise<SwaggerResponse<any>> =>
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
         response.data
      ) as any,
      (error: AxiosError) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        if (error.response) {
          return Promise.reject(
            new RequestError(
              error.response.data as any,
              error.response.status,
              error.response,
            ),
          )
        }

        if (error.isAxiosError)
          return Promise.reject(new RequestError('noInternetConnection'))

        return Promise.reject(error)
      },
    )
  }

  // ًًRequest interceptor
  axiosInstance.interceptors.request.use(
    async (requestConfig) => {
      if (!requestConfig.headers)
        requestConfig.headers = {}

      // Do something before request is sent
      /** Example on how to add authorization based on security */
      requestConfig.headers['X-User-Token'] = localStorage.getItem('userToken')

      return requestConfig
    },
    (error) =>
      // Do something with request error
       Promise.reject(error)
    ,
  )

  return axiosInstance
}

class RequestError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public response?: AxiosResponse,
  ) {
    super(message)
  }

  isApiException = true

  static isRequestError(error: any): error is RequestError {
    return error.isApiException
  }
}

export type Security = any[]

// export interface SwaggerResponse<R> extends AxiosResponse<R> {}
export type SwaggerResponse<R> = R;

export { getAxiosInstance, RequestError }
