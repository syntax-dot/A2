//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

export interface AppGradeModel {
  Description?: string;
  /**
   *
   * - Format: int32
   */
  Value?: number;
}

export interface ChangePassModel {
  NewPass?: string;
  OldPass?: string;
}

export interface CheckNumberSearchModel {
  number?: string;
  vin?: string;
}

export interface CreateFilterModel {
  FilterVersion?: string;
  /**
   *
   * - Format: int32
   */
  avgCostDeviation?: number;
  avgPriceDelta?: number[];
  bodies?: number[];
  /**
   *
   * - Format: int32
   */
  carState?: number;
  carTypes?: number[];
  cities?: string;
  credateString?: string;
  /**
   *
   * - Format: int64
   */
  credateTimeStamp?: number;
  enabled?: boolean;
  gears?: number[];
  horsepower?: number[];
  iceValues?: number[];
  ices?: number[];
  marks?: number[];
  mileages?: number[];
  /**
   *
   * - Format: int32
   */
  minPricechange?: number;
  models?: number[];
  name?: string;
  notifications?: boolean;
  /**
   *
   * - Format: int32
   */
  ownerType?: number;
  /**
   *
   * - Format: int32
   */
  owners?: number;
  ownersCount?: number[];
  priceTypes?: number[];
  pricechanges?: number[];
  prices?: number[];
  regions?: number[];
  /**
   *
   * - Format: int32
   */
  secondhand?: number;
  sites?: number[];
  states?: number[];
  transmissions?: number[];
  wheels?: number[];
  years?: number[];
}

export interface DeviceTokenModel {
  isSandbox?: boolean;
  token?: string;
}

export interface EditFilterModel {
  FilterVersion?: string;
  /**
   *
   * - Format: int32
   */
  avgCostDeviation?: number;
  avgPriceDelta?: number[];
  bodies?: number[];
  /**
   *
   * - Format: int32
   */
  carState?: number;
  carTypes?: number[];
  cities?: string;
  credateString?: string;
  /**
   *
   * - Format: int64
   */
  credateTimeStamp?: number;
  enabled?: boolean;
  gears?: number[];
  horsepower?: number[];
  iceValues?: number[];
  ices?: number[];
  /**
   *
   * - Format: int32
   */
  id?: number;
  marks?: number[];
  mileages?: number[];
  /**
   *
   * - Format: int32
   */
  minPricechange?: number;
  models?: number[];
  name?: string;
  notifications?: boolean;
  /**
   *
   * - Format: int32
   */
  ownerType?: number;
  /**
   *
   * - Format: int32
   */
  owners?: number;
  ownersCount?: number[];
  priceTypes?: number[];
  pricechanges?: number[];
  prices?: number[];
  regions?: number[];
  /**
   *
   * - Format: int32
   */
  secondhand?: number;
  sites?: number[];
  states?: number[];
  transmissions?: number[];
  wheels?: number[];
  years?: number[];
}

export interface FavouriteModel {
  /**
   *
   * - Format: int32
   */
  id?: number;
  olderthan?: string;
}

export interface GarageModel {
  /**
   *
   * - Format: int32
   */
  clickid?: number;
  gosnumber?: string;
  /**
   *
   * - Format: int32
   */
  id?: number;
  /**
   *
   * - Format: int32
   */
  kpp?: number;
  marka?: string;
  model?: string;
  photo?: string;
  purchasedate?: string;
  purchaseprice?: string;
  saledate?: string;
  saleprice?: string;
  /**
   *
   * - Format: int32
   */
  sold?: number;
  title?: string;
  vin?: string;
  volume?: string;
  /**
   *
   * - Format: int32
   */
  year?: number;
}

export interface GetCarsQueryParams {
  /**
   *
   * - Format: int32
   */
  av100Marka?: number;
  filters?: string;
  /**
   *
   * - Format: int32
   */
  fromid?: number;
  /**
   *
   * - Format: int32
   */
  lastId?: number;
  /**
   *
   * - Format: int32
   */
  toid?: number;
}

export interface GetClicksQueryParams {
  datefrom?: string;
  dateto?: string;
  /**
   *
   * - Format: int32
   */
  page?: number;
  /**
   *
   * - Format: int32
   */
  take?: number;
}

export interface GetCreatepodborQueryParams {
  vin: string;
}

export interface GetDeviceGetdevicetokenQueryParams {
  /**
   *
   * - Format: int32
   */
  userId: number;
}

export interface GetGarageQueryParams {
  /**
   *
   * - Format: int32
   */
  id?: number;
}

export interface GetGaragelistQueryParams {
  hidesold?: string;
  /**
   *
   * - Format: int32
   */
  page?: number;
  /**
   *
   * - Format: int32
   */
  take?: number;
}

export interface GetGaragestatQueryParams {
  dateFrom?: string;
  dateTo?: string;
  /**
   *
   * - Format: int32
   */
  dealType?: number;
  operationFrom?: string;
  operationTo?: string;
}

export interface GetModelsQueryParams {
  /**
   *
   * - Format: int32
   */
  mark: number;
}

export interface GetNewsQueryParams {
  /**
   *
   * - Format: int32
   */
  page?: number;
  /**
   *
   * - Format: int32
   */
  take?: number;
}

export interface GetPodborhistoryQueryParams {
  /**
   *
   * - Format: int32
   */
  page?: number;
}

export interface GetRegionsQueryParams {
  /**
   *
   * - Format: int32
   */
  key?: number;
}

export interface GetSearchQueryParams {
  carNumber?: string;
  phone?: string;
  url?: string;
  vin?: string;
}

export interface GetServicesQueryParams {
  /**
   *
   * - Format: int32
   */
  page?: number;
  /**
   *
   * - Format: int32
   */
  take?: number;
}

export interface GetSetpurchaseProductQueryParams {
  sign: string;
}

export interface GetSipQueryParams {
  /**
   *
   * - Format: int32
   */
  id?: number;
  /**
   *
   * - Format: int32
   */
  page?: number;
  uin?: string;
}

export interface GetSipbalanceservQueryParams {
  /**
   *
   * - Format: int32
   */
  userId?: number;
}

export interface GibddSaveTokenModel {
  token?: string;
}

export interface PayBallModel {
  /**
   *
   * - Format: int32
   */
  Balls?: number;
  /**
   *
   * - Format: int32
   */
  UserId?: number;
}

export interface PobdorFilter {
  Color?: string;
  /**
   *
   * - Format: int32
   */
  DistFrom?: number;
  /**
   *
   * - Format: int32
   */
  DistTo?: number;
  /**
   *
   * - Format: int32
   */
  DtpCount?: number;
  Key?: string;
  /**
   *
   * - Format: int32
   */
  OwnersCount?: number;
  /**
   *
   * - Format: int32
   */
  PowerHp?: number;
  /**
   *
   * - Format: int32
   */
  PowerKwt?: number;
  SDirection?: string;
  SField?: string;
  /**
   *
   * - Format: int32
   */
  Seqno?: number;
  /**
   *
   * - Format: int32
   */
  Year?: number;
}

export interface PostApiPodborQueryParams {
  /**
   *
   * - Format: int32
   */
  seqno: number;
  "serviceRequest.browser"?: string;
  "serviceRequest.captcha"?: string;
  /**
   *
   * - Format: int64
   */
  "serviceRequest.chatID"?: number;
  "serviceRequest.color"?: string;
  "serviceRequest.cookies"?: string;
  /**
   *
   * - Format: date-time
   */
  "serviceRequest.credate"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.creuserid"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.dtpCount"?: number;
  "serviceRequest.engineNumber"?: string;
  "serviceRequest.iP"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.isSearch"?: number;
  "serviceRequest.key"?: string;
  /**
   *
   * - Format: date-time
   */
  "serviceRequest.lastupdate"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.lastuserid"?: number;
  "serviceRequest.marka"?: string;
  "serviceRequest.markaStandard"?: string;
  "serviceRequest.model"?: string;
  "serviceRequest.modelStandard"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.ownerCount"?: number;
  "serviceRequest.pts"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.region"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.restrictCount"?: number;
  "serviceRequest.result"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.retried"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.source"?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "-1";
  /**
   *
   * - Format: int32
   */
  "serviceRequest.status"?: "0" | "1" | "2" | "3" | "4" | "-1";
  "serviceRequest.title"?: string;
  "serviceRequest.tokenIP"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.type"?: "1" | "2" | "3" | "4" | "5" | "6" | "-1";
  /**
   *
   * - Format: int32
   */
  "serviceRequest.uID"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.utilState"?: "1" | "2" | "3" | "5" | "-1";
  "serviceRequest.vbrUserId"?: string;
  "serviceRequest.vin"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.year"?: number;
  /**
   *
   * - Format: int64
   */
  "task.chatId"?: number;
  /**
   *
   * - Format: date-time
   */
  "task.credate"?: string;
  /**
   *
   * - Format: int32
   */
  "task.creuserid"?: number;
  "task.key"?: string;
  /**
   *
   * - Format: date-time
   */
  "task.lastupdate"?: string;
  /**
   *
   * - Format: int32
   */
  "task.lastuserid"?: number;
  "task.listOpenedVin"?: string;
  /**
   *
   * - Format: double
   */
  "task.progressPercent"?: number;
  "task.resultjson"?: string;
  /**
   *
   * - Format: int32
   */
  "task.status"?: "0" | "1" | "2" | "3" | "4" | "-1";
  "task.title"?: string;
  /**
   *
   * - Format: int32
   */
  "task.uID"?: number;
  /**
   *
   * - Format: int32
   */
  "task.userId"?: number;
  "task.vin"?: string;
}

export interface PostApiShortreportQueryParams {
  /**
   *
   * - Format: date-time
   */
  "report.credate"?: string;
  /**
   *
   * - Format: int32
   */
  "report.creuserid"?: number;
  /**
   *
   * - Format: date-time
   */
  "report.generationenddate"?: string;
  "report.gosnumber"?: string;
  "report.key"?: string;
  /**
   *
   * - Format: date-time
   */
  "report.lastupdate"?: string;
  /**
   *
   * - Format: int32
   */
  "report.lastuserid"?: number;
  "report.progressinfo"?: string;
  "report.resultjson"?: string;
  /**
   *
   * - Format: int32
   */
  "report.status"?: "0" | "1" | "2" | "3" | "4" | "-1";
  "report.title"?: string;
  /**
   *
   * - Format: int32
   */
  "report.type"?: number;
  /**
   *
   * - Format: int32
   */
  "report.uID"?: number;
  /**
   *
   * - Format: int32
   */
  "report.userID"?: number;
  "report.vin"?: string;
  /**
   *
   * - Format: int32
   */
  "reportResult.avtokodMosRuDtpCount"?: number;
  "reportResult.carsharing"?: boolean;
  "reportResult.color"?: string;
  /**
   *
   * - Format: int32
   */
  "reportResult.countOwner"?: number;
  /**
   *
   * - Format: int32
   */
  "reportResult.dtpCount"?: number;
  "reportResult.gosnumberList"?: string[];
  /**
   *
   * - Format: int32
   */
  "reportResult.isSearch"?: number;
  "reportResult.markaModel"?: string;
  /**
   *
   * - Format: int32
   */
  "reportResult.mosRuAuthohistoryDtpCount"?: number;
  /**
   *
   * - Format: double
   */
  "reportResult.powerHp"?: number;
  /**
   *
   * - Format: double
   */
  "reportResult.powerKwt"?: number;
  /**
   *
   * - Format: date-time
   */
  "reportResult.probegDate"?: string;
  "reportResult.probegTwisted"?: boolean;
  /**
   *
   * - Format: int32
   */
  "reportResult.probegVal"?: number;
  /**
   *
   * - Format: int32
   */
  "reportResult.restrictCount"?: number;
  /**
   *
   * - Format: date-time
   */
  "reportResult.restrictDate"?: string;
  /**
   *
   * - Format: date-time
   */
  "reportResult.searchDate"?: string;
  /**
   *
   * - Format: int32
   */
  "reportResult.seqNo"?: number;
  /**
   *
   * - Format: date-time
   */
  "reportResult.serviceRequestDtpDate"?: string;
  /**
   *
   * - Format: date-time
   */
  "reportResult.serviceRequestRHDate"?: string;
  "reportResult.serviceRequestRHLastOwnerType"?: string;
  "reportResult.taxi"?: boolean;
  "reportResult.vehicleCity"?: string;
  /**
   *
   * - Format: date-time
   */
  "reportResult.vehicleRegDate"?: string;
  "reportResult.vehicleRegion"?: string;
  "reportResult.vin"?: string;
  /**
   *
   * - Format: int32
   */
  "reportResult.year"?: number;
  /**
   *
   * - Format: int32
   */
  "reportResult.zalogCount"?: number;
  /**
   *
   * - Format: date-time
   */
  "reportResult.zalogDate"?: string;
  "serviceRequest.browser"?: string;
  "serviceRequest.captcha"?: string;
  /**
   *
   * - Format: int64
   */
  "serviceRequest.chatID"?: number;
  "serviceRequest.color"?: string;
  "serviceRequest.cookies"?: string;
  /**
   *
   * - Format: date-time
   */
  "serviceRequest.credate"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.creuserid"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.dtpCount"?: number;
  "serviceRequest.engineNumber"?: string;
  "serviceRequest.iP"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.isSearch"?: number;
  "serviceRequest.key"?: string;
  /**
   *
   * - Format: date-time
   */
  "serviceRequest.lastupdate"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.lastuserid"?: number;
  "serviceRequest.marka"?: string;
  "serviceRequest.markaStandard"?: string;
  "serviceRequest.model"?: string;
  "serviceRequest.modelStandard"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.ownerCount"?: number;
  "serviceRequest.pts"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.region"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.restrictCount"?: number;
  "serviceRequest.result"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.retried"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.source"?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "-1";
  /**
   *
   * - Format: int32
   */
  "serviceRequest.status"?: "0" | "1" | "2" | "3" | "4" | "-1";
  "serviceRequest.title"?: string;
  "serviceRequest.tokenIP"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.type"?: "1" | "2" | "3" | "4" | "5" | "6" | "-1";
  /**
   *
   * - Format: int32
   */
  "serviceRequest.uID"?: number;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.utilState"?: "1" | "2" | "3" | "5" | "-1";
  "serviceRequest.vbrUserId"?: string;
  "serviceRequest.vin"?: string;
  /**
   *
   * - Format: int32
   */
  "serviceRequest.year"?: number;
}

export interface PostEraseaccountQueryParams {
  /**
   *
   * - Format: int32
   */
  id?: number;
}

export interface PostSetversionQueryParams {
  key?: string;
  mode?: string;
  value?: string;
}

export interface PostSiploginQueryParams {
  /**
   *
   * - Format: int32
   */
  userid?: number;
}

export interface ProfileModel {
  /**
   *
   * - Format: int32
   */
  CallType?: number;
  Email?: string;
  EnableAudio?: boolean;
  /**
   *
   * - Format: int32
   */
  EnableFavorits?: number;
  /**
   *
   * - Format: int32
   */
  EnableFreeCalls?: number;
  FName?: string;
  LName?: string;
  LockLentaUpdate?: boolean;
  /**
   *
   * - Format: int32
   */
  NotifyType?: "0" | "1" | "2" | "3" | "-1";
  Phone?: string;
  /**
   *
   * - Format: int32
   */
  ShowDetailsInfo?: number;
  /**
   *
   * - Format: int64
   */
  TelegramChat?: number;
  /**
   *
   * - Format: int32
   */
  TimeZone?: number;
}

export interface PromocodeModel {
  Code?: string;
  /**
   *
   * - Format: int32
   */
  UserId?: number;
}

export type RequestBodyDeviceTokenModel = DeviceTokenModel;

export type RequestBodyFavouriteModel = FavouriteModel;

export type RequestBodyPayBallModel = PayBallModel;

export type RequestBodyUpdatePodborModel = UpdatePodborModel;

export type RequestBodyUserRegisterModel = UserRegisterModel;

export interface Servicerequest {
  Browser?: string;
  Captcha?: string;
  /**
   *
   * - Format: int64
   */
  ChatID?: number;
  Color?: string;
  Cookies?: string;
  /**
   *
   * - Format: date-time
   */
  Credate?: string;
  /**
   *
   * - Format: int32
   */
  Creuserid?: number;
  /**
   *
   * - Format: int32
   */
  DtpCount?: number;
  EngineNumber?: string;
  IP?: string;
  /**
   *
   * - Format: int32
   */
  IsSearch?: number;
  Key?: string;
  /**
   *
   * - Format: date-time
   */
  Lastupdate?: string;
  /**
   *
   * - Format: int32
   */
  Lastuserid?: number;
  Marka?: string;
  MarkaStandard?: string;
  Model?: string;
  ModelStandard?: string;
  /**
   *
   * - Format: int32
   */
  OwnerCount?: number;
  Pts?: string;
  /**
   *
   * - Format: int32
   */
  Region?: number;
  /**
   *
   * - Format: int32
   */
  RestrictCount?: number;
  Result?: string;
  /**
   *
   * - Format: int32
   */
  Retried?: number;
  /**
   *
   * - Format: int32
   */
  Source?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "-1";
  /**
   *
   * - Format: int32
   */
  Status?: "0" | "1" | "2" | "3" | "4" | "-1";
  StringStatus?: string;
  Title?: string;
  TokenIP?: string;
  /**
   *
   * - Format: int32
   */
  Type?: "1" | "2" | "3" | "4" | "5" | "6" | "-1";
  TypeString?: string;
  /**
   *
   * - Format: int32
   */
  UID?: number;
  /**
   *
   * - Format: int32
   */
  UtilState?: "1" | "2" | "3" | "5" | "-1";
  VbrUserId?: string;
  Vin?: string;
  /**
   *
   * - Format: int32
   */
  Year?: number;
}

export interface ShortReportSetModel {
  Gosnumber?: string;
  Vin?: string;
}

export interface Shortreport {
  /**
   *
   * - Format: date-time
   */
  Credate?: string;
  /**
   *
   * - Format: int32
   */
  Creuserid?: number;
  /**
   *
   * - Format: date-time
   */
  Generationenddate?: string;
  Gosnumber?: string;
  Key?: string;
  /**
   *
   * - Format: date-time
   */
  Lastupdate?: string;
  /**
   *
   * - Format: int32
   */
  Lastuserid?: number;
  Progressinfo?: string;
  Resultjson?: string;
  /**
   *
   * - Format: int32
   */
  Status?: "0" | "1" | "2" | "3" | "4" | "-1";
  Title?: string;
  /**
   *
   * - Format: int32
   */
  Type?: number;
  /**
   *
   * - Format: int32
   */
  UID?: number;
  /**
   *
   * - Format: int32
   */
  UserID?: number;
  Vin?: string;
}

export interface SipModel {
  CallState?: string;
  CallUin?: string;
  /**
   *
   * - Format: int32
   */
  CallUserId?: number;
  Date?: string;
  /**
   *
   * - Format: int32
   */
  Id?: number;
  /**
   *
   * - Format: int32
   */
  MainDuration?: number;
  OutCallPhone?: string;
  /**
   *
   * - Format: int32
   */
  StartDuration?: number;
}

export interface UpdatePodborModel {
  Key?: string;
  /**
   *
   * - Format: int32
   */
  Seqno?: number;
}

export interface UserLoginModel {
  /**
   *
   * - Format: int32
   */
  fromuser?: number;
  login?: string;
  password?: string;
}

export interface UserProfileModel {
  /**
   *
   * - Format: int32
   */
  autoru?: number;
  calltype?: string;
  /**
   *
   * - Format: int32
   */
  clicks?: number;
  /**
   *
   * - Format: int32
   */
  companyid?: number;
  companyname?: string;
  email?: string;
  enableaudio?: boolean;
  /**
   *
   * - Format: int32
   */
  erased?: number;
  /**
   *
   * - Format: int64
   */
  expire?: number;
  /**
   *
   * - Format: int32
   */
  filterMaxCount?: number;
  fname?: string;
  /**
   *
   * - Format: int32
   */
  id?: number;
  lname?: string;
  locklentaupdate?: boolean;
  login?: string;
  notifytype?: string;
  notifytypestring?: string;
  os?: string;
  phone?: string;
  /**
   *
   * - Format: int32
   */
  sendMethod?: "0" | "1" | "2" | "3" | "-1";
  sipid?: string;
  telegramChat?: string;
  timezone?: string;
  timezonestring?: string;
  turbosip?: string;
  turbosip20accessto?: string;
  turbosip5accessto?: string;
  /**
   *
   * - Format: int32
   */
  updatePeriod?: number;
}

export interface UserRegisterModel {
  login?: string;
}

export interface ValueTuple_Boolean_ApiError_Boolean_ {
  Item1?: boolean;
  /**
   *
   * - Format: int32
   */
  Item2?:
    | "0"
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36"
    | "37"
    | "38"
    | "39"
    | "40"
    | "41"
    | "42"
    | "43"
    | "44"
    | "45"
    | "46"
    | "47"
    | "48"
    | "49"
    | "50"
    | "51"
    | "52"
    | "53"
    | "54"
    | "55"
    | "56"
    | "57"
    | "58"
    | "59"
    | "60"
    | "61"
    | "62"
    | "63"
    | "64"
    | "65"
    | "66"
    | "67"
    | "68"
    | "69"
    | "70"
    | "71"
    | "72"
    | "73"
    | "74"
    | "75";
  Item3?: boolean;
}

export interface Vingeneratetask {
  /**
   *
   * - Format: int64
   */
  ChatId?: number;
  /**
   *
   * - Format: date-time
   */
  Credate?: string;
  /**
   *
   * - Format: int32
   */
  Creuserid?: number;
  Key?: string;
  /**
   *
   * - Format: date-time
   */
  Lastupdate?: string;
  /**
   *
   * - Format: int32
   */
  Lastuserid?: number;
  ListOpenedVin?: string;
  /**
   *
   * - Format: double
   */
  ProgressPercent?: number;
  Resultjson?: string;
  /**
   *
   * - Format: int32
   */
  Status?: "0" | "1" | "2" | "3" | "4" | "-1";
  StringStatus?: string;
  Title?: string;
  /**
   *
   * - Format: int32
   */
  UID?: number;
  /**
   *
   * - Format: int32
   */
  UserId?: number;
  Vin?: string;
}

export interface VingeneratetaskResultRow {
  /**
   *
   * - Format: int32
   */
  AvtokodMosRuDtpCount?: number;
  Carsharing?: boolean;
  Color?: string;
  /**
   *
   * - Format: int32
   */
  CountOwner?: number;
  /**
   *
   * - Format: int32
   */
  DtpCount?: number;
  GosnumberList?: string[];
  /**
   *
   * - Format: int32
   */
  IsSearch?: number;
  MarkaModel?: string;
  /**
   *
   * - Format: int32
   */
  MosRuAuthohistoryDtpCount?: number;
  /**
   *
   * - Format: double
   */
  PowerHp?: number;
  /**
   *
   * - Format: double
   */
  PowerKwt?: number;
  /**
   *
   * - Format: date-time
   */
  ProbegDate?: string;
  ProbegTwisted?: boolean;
  /**
   *
   * - Format: int32
   */
  ProbegVal?: number;
  /**
   *
   * - Format: int32
   */
  RestrictCount?: number;
  /**
   *
   * - Format: date-time
   */
  RestrictDate?: string;
  /**
   *
   * - Format: date-time
   */
  SearchDate?: string;
  /**
   *
   * - Format: int32
   */
  SeqNo?: number;
  /**
   *
   * - Format: date-time
   */
  ServiceRequestDtpDate?: string;
  /**
   *
   * - Format: date-time
   */
  ServiceRequestRHDate?: string;
  ServiceRequestRHLastOwnerType?: string;
  Taxi?: boolean;
  VehicleCity?: string;
  /**
   *
   * - Format: date-time
   */
  VehicleRegDate?: string;
  VehicleRegion?: string;
  Vin?: string;
  /**
   *
   * - Format: int32
   */
  Year?: number;
  /**
   *
   * - Format: int32
   */
  ZalogCount?: number;
  /**
   *
   * - Format: date-time
   */
  ZalogDate?: string;
}
