export function isSuccessResponse(response) {
  const res = response.data;
  let valid = false;
  if (res?.responseCode) {
    const resCode = successResponseCode.find(
      status => status === res.responseCode,
    );
    if (resCode) {
      valid = true;
    } else {
      valid = false;
    }
  } else {
    valid = response.status === 200 || false;
  }

  return valid;
}
