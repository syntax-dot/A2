//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from 'axios'
import type { SwaggerResponse } from './config'
import { Http } from './httpRequest'
//@ts-ignore
import qs from 'qs'
import type {
  GetCarsQueryParams,
  GetDeviceGetdevicetokenQueryParams,
  GetModelsQueryParams,
  GetRegionsQueryParams,
  GetGarageQueryParams,
  GetGaragelistQueryParams,
  GetGaragestatQueryParams,
  GetNewsQueryParams,
  GetCreatepodborQueryParams,
  GetPodborhistoryQueryParams,
  PostApiPodborQueryParams,
  GetSetpurchaseProductQueryParams,
  GetSearchQueryParams,
  GetServicesQueryParams,
  PostApiShortreportQueryParams,
  GetSipQueryParams,
  GetSipbalanceservQueryParams,
  PostSiploginQueryParams,
  PostSetversionQueryParams,
  GetClicksQueryParams,
  PostEraseaccountQueryParams,
  CreateFilterModel,
  EditFilterModel,
  GarageModel,
  AppGradeModel,
  GibddSaveTokenModel,
  PobdorFilter,
  ProfileModel,
  PromocodeModel,
  CheckNumberSearchModel,
  ShortReportSetModel,
  Shortreport,
  SipModel,
  UserLoginModel,
  ChangePassModel,
  UserProfileModel,
  ValueTuple_Boolean_ApiError_Boolean_,
  RequestBodyFavouriteModel,
  RequestBodyUpdatePodborModel,
  RequestBodyDeviceTokenModel,
  RequestBodyUserRegisterModel,
  RequestBodyPayBallModel,
} from './types'
import { User } from '../app/types/User'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== 'production'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig,
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, 'i')
    path = path.replace(re, obj[key])
  })

  return path
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData()

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value)
  })

  return formData
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
  return qs.stringify(requestBody)
}

export const deleteFavourites = (
  requestBody: RequestBodyFavouriteModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.deleteRequest(
    deleteFavourites.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
deleteFavourites.key = '/favourites'

export const deleteFiltersFilterId = (
  filterId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.deleteRequest(
    template(deleteFiltersFilterId.key, { filterId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
deleteFiltersFilterId.key = '/filters/{filterId}'

export const deleteGarage = (
  requestBody: RequestBodyFavouriteModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.deleteRequest(
    deleteGarage.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
deleteGarage.key = '/garage'

export const getActionVinNumber = (
  number: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getActionVinNumber.key, { number }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getActionVinNumber.key = '/action/vin/{number}'

export const getActionVininfoVin = (
  vin: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getActionVininfoVin.key, { vin }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getActionVininfoVin.key = '/action/vininfo/{vin}'

export const getAv100marks = (
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getAv100marks.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getAv100marks.key = '/av100marks'

export const getBalls = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getBalls.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getBalls.key = '/balls'

export const getBotlist = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getBotlist.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getBotlist.key = '/botlist'

export const getCars = (
  queryParams?: GetCarsQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getCars.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getCars.key = '/cars'

export const getCarsCarId = (
  carId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getCarsCarId.key, { carId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getCarsCarId.key = '/cars/{carId}'

export const getCarsCarIdAdditional = (
  carId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getCarsCarIdAdditional.key, { carId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getCarsCarIdAdditional.key = '/cars/{carId}/additional'

export const getClicks = (
  queryParams?: GetClicksQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getClicks.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getClicks.key = '/clicks'

export const getCreatepodbor = (
  queryParams: GetCreatepodborQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getCreatepodbor.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getCreatepodbor.key = '/createpodbor'

export const getDeltapriceOfferid = (
  offerid: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getDeltapriceOfferid.key, { offerid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getDeltapriceOfferid.key = '/deltaprice/{offerid}'

export const getDeviceGetdevicetoken = (
  queryParams: GetDeviceGetdevicetokenQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getDeviceGetdevicetoken.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getDeviceGetdevicetoken.key = '/device/getdevicetoken'

export const getDictionaries = (
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getDictionaries.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getDictionaries.key = '/dictionaries'

export const getFavourites = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getFavourites.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getFavourites.key = '/favourites'

export const getFilters = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getFilters.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getFilters.key = '/filters'

export const getFiltersFilterId = (
  filterId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getFiltersFilterId.key, { filterId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getFiltersFilterId.key = '/filters/{filterId}'

export const getGarage = (
  queryParams?: GetGarageQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getGarage.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getGarage.key = '/garage'

export const getGaragelist = (
  queryParams?: GetGaragelistQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getGaragelist.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getGaragelist.key = '/garagelist'

export const getGaragestat = (
  queryParams?: GetGaragestatQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getGaragestat.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getGaragestat.key = '/garagestat'

export const getGradeUserId = (
  userId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getGradeUserId.key, { userId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getGradeUserId.key = '/grade/{userId}'

export const getMarkamodel = (
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getMarkamodel.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getMarkamodel.key = '/markamodel'

export const getModels = (
  queryParams: GetModelsQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getModels.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getModels.key = '/models'

export const getNews = (
  queryParams?: GetNewsQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getNews.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getNews.key = '/news'

export const getNewsId = (
  id: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getNewsId.key, { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getNewsId.key = '/news/{id}'

export const getOnlinefilter = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getOnlinefilter.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getOnlinefilter.key = '/onlinefilter'

export const getParseGibdd = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getParseGibdd.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getParseGibdd.key = '/parse/gibdd'

export const getPaymentInfo = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getPaymentInfo.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getPaymentInfo.key = '/paymentInfo'

export const getPaypodbor = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getPaypodbor.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getPaypodbor.key = '/paypodbor'

export const getPodborbalance = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getPodborbalance.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getPodborbalance.key = '/podborbalance'

export const getPodborexample = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getPodborexample.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getPodborexample.key = '/podborexample'

export const getPodborhistory = (
  queryParams?: GetPodborhistoryQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getPodborhistory.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getPodborhistory.key = '/podborhistory'

export const getRegions = (
  queryParams?: GetRegionsQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getRegions.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getRegions.key = '/regions'

export const getReports = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getReports.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getReports.key = '/reports'

export const getSamecarsOfferid = (
  offerid: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getSamecarsOfferid.key, { offerid }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSamecarsOfferid.key = '/samecars/{offerid}'

export const getSearch = (
  queryParams?: GetSearchQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getSearch.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSearch.key = '/search'

export const getServices = (
  queryParams?: GetServicesQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getServices.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getServices.key = '/services'

export const getSetpurchaseProduct = (
  product: string,
  queryParams: GetSetpurchaseProductQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getSetpurchaseProduct.key, { product }),
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSetpurchaseProduct.key = '/setpurchase/{product}'

export const getShortreportId = (
  id: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportId.key, { id }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportId.key = '/shortreport/{id}'

export const getShortreportresultKey = (
  key: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportresultKey.key, { key }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportresultKey.key = '/shortreportresult/{key}'

export const getShortreportupdatedtpKey = (
  key: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportupdatedtpKey.key, { key }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportupdatedtpKey.key = '/shortreportupdatedtp/{key}'

export const getShortreportupdateownersKey = (
  key: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportupdateownersKey.key, { key }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportupdateownersKey.key = '/shortreportupdateowners/{key}'

export const getShortreportupdaterestrictKey = (
  key: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportupdaterestrictKey.key, { key }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportupdaterestrictKey.key = '/shortreportupdaterestrict/{key}'

export const getShortreportupdatesearchKey = (
  key: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportupdatesearchKey.key, { key }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportupdatesearchKey.key = '/shortreportupdatesearch/{key}'

export const getShortreportupdatezalogKey = (
  key: string,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getShortreportupdatezalogKey.key, { key }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getShortreportupdatezalogKey.key = '/shortreportupdatezalog/{key}'

export const getSip = (
  queryParams?: GetSipQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getSip.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSip.key = '/sip'

export const getSipbalance = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getSipbalance.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSipbalance.key = '/sipbalance'

export const getSipbalanceserv = (
  queryParams?: GetSipbalanceservQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getSipbalanceserv.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSipbalanceserv.key = '/sipbalanceserv'

export const getSourcegroups = (
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getSourcegroups.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getSourcegroups.key = '/sourcegroups'

export const getUserUserId = (
  userId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<User>> => Http.getRequest(
    template(getUserUserId.key, { userId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getUserUserId.key = '/user/{userId}'

export const getUserballUserId = (
  userId: number,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    template(getUserballUserId.key, { userId }),
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getUserballUserId.key = '/userball/{userId}'

export const getUsererase = (
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getUsererase.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getUsererase.key = '/usererase'

export const getVersion = (
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getVersion.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getVersion.key = '/version'

export const getVersions = (
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.getRequest(
    getVersions.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
getVersions.key = '/versions'

export const postApiPodbor = (
  queryParams: PostApiPodborQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ValueTuple_Boolean_ApiError_Boolean_>> => Http.postRequest(
    postApiPodbor.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postApiPodbor.key = '/api/Podbor'

export const postApiShortreport = (
  queryParams?: PostApiShortreportQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ValueTuple_Boolean_ApiError_Boolean_>> => Http.postRequest(
    postApiShortreport.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postApiShortreport.key = '/api/Shortreport'

export const postBalls = (
  requestBody: RequestBodyPayBallModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postBalls.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postBalls.key = '/balls'

export const postChecknumber = (
  requestBody: CheckNumberSearchModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postChecknumber.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postChecknumber.key = '/checknumber'

export const postDeviceClearetoken = (
  requestBody: RequestBodyDeviceTokenModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postDeviceClearetoken.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postDeviceClearetoken.key = '/device/clearetoken'

export const postDeviceToken = (
  requestBody: RequestBodyDeviceTokenModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postDeviceToken.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postDeviceToken.key = '/device/token'

export const postEraseaccount = (
  queryParams?: PostEraseaccountQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postEraseaccount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postEraseaccount.key = '/eraseaccount'

export const postFilters = (
  requestBody: CreateFilterModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postFilters.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postFilters.key = '/filters'

export const postLogin = (
  requestBody: UserLoginModel,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postLogin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postLogin.key = '/login'

export const postParseGibdd = (
  requestBody: GibddSaveTokenModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postParseGibdd.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postParseGibdd.key = '/parse/gibdd'

export const postPodbor = (
  requestBody: PobdorFilter,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodbor.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodbor.key = '/podbor'

export const postPodborback = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodborback.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodborback.key = '/podborback'

export const postPodboropenvin = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodboropenvin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodboropenvin.key = '/podboropenvin'

export const postPodborupdatedtp = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodborupdatedtp.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodborupdatedtp.key = '/podborupdatedtp'

export const postPodborupdateowners = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodborupdateowners.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodborupdateowners.key = '/podborupdateowners'

export const postPodborupdaterestrict = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodborupdaterestrict.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodborupdaterestrict.key = '/podborupdaterestrict'

export const postPodborupdatesearch = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodborupdatesearch.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodborupdatesearch.key = '/podborupdatesearch'

export const postPodborupdatezalog = (
  requestBody: RequestBodyUpdatePodborModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPodborupdatezalog.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPodborupdatezalog.key = '/podborupdatezalog'

export const postPromocode = (
  requestBody: PromocodeModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postPromocode.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postPromocode.key = '/promocode'

export const postRegister = (
  requestBody: RequestBodyUserRegisterModel,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postRegister.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postRegister.key = '/register'

export const postRestore = (
  requestBody: RequestBodyUserRegisterModel,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postRestore.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postRestore.key = '/restore'

export const postSetshortreport = (
  requestBody: ShortReportSetModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postSetshortreport.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postSetshortreport.key = '/setshortreport'

export const postSetversion = (
  queryParams?: PostSetversionQueryParams,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postSetversion.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postSetversion.key = '/setversion'

export const postSip = (
  requestBody: SipModel,
  headerParams?: { 'X-Api-Key': string; 'X-Device-OS': string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postSip.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postSip.key = '/sip'

export const postSiplogin = (
  queryParams?: PostSiploginQueryParams,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postSiplogin.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postSiplogin.key = '/siplogin'

export const postUserNewpass = (
  requestBody: ChangePassModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.postRequest(
    postUserNewpass.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
postUserNewpass.key = '/user/newpass'

export const putFavourites = (
  requestBody: RequestBodyFavouriteModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    putFavourites.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putFavourites.key = '/favourites'

export const putFiltersFilterId = (
  filterId: number,
  requestBody: EditFilterModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    template(putFiltersFilterId.key, { filterId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putFiltersFilterId.key = '/filters/{filterId}'

export const putGarage = (
  requestBody: GarageModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    putGarage.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putGarage.key = '/garage'

export const putGradeUserId = (
  userId: number,
  requestBody: AppGradeModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    template(putGradeUserId.key, { userId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putGradeUserId.key = '/grade/{userId}'

export const putProfileUserId = (
  userId: number,
  requestBody: ProfileModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    template(putProfileUserId.key, { userId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putProfileUserId.key = '/profile/{userId}'

export const putUserUserId = (
  userId: number,
  requestBody: UserProfileModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    template(putUserUserId.key, { userId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putUserUserId.key = '/user/{userId}'

export const putUserballpayUserId = (
  userId: number,
  requestBody: RequestBodyPayBallModel,
  headerParams?: {
    'X-Api-Key': string;
    'X-Device-OS': string;
    'X-User-Token': string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<{ [x in string | number]: any }>> => Http.putRequest(
    template(putUserballpayUserId.key, { userId }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT0,
          ...headerParams,
        },
      },
      configOverride,
    ),
  )

/** Key is end point string without base url */
putUserballpayUserId.key = '/userballpay/{userId}'
export const _CONSTANT0 = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}
