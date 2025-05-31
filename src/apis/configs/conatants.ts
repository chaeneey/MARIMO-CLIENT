// path
export const FETCH_BANNER = (productType: "INVITATION" | "PREVIDEO") =>
  `/banners?productType=${productType}`;
export const FETCH_INVITATION_LIST = `/invitations`;
export const FETCH_PREVIDEO_LIST = `/pre-videos`;
export const FETCH_INVITATION_DETAIL = (invitationId: number) =>
  `/invitations/${invitationId}`;
export const FETCH_PREVIDEO_DETAIL = (preVideoId: number) =>
  `/pre-videos/${preVideoId}`;
export const POST_INVITATION = `/orders/invitations`;
export const POST_PREVIDEO = `/orders/pre-videos`;
export const GET_PRISIGNED_URL = (attachmentType: string) =>
  `/files/presigned-url?attachmentType=${attachmentType}`;
export const FETCH_ORDER_INFO = (
  orderType: "invitations" | "pre-videos",
  customerName: string,
  orderCode: string,
) => `/orders/${orderType}?customerName=${customerName}&orderCode=${orderCode}`;
