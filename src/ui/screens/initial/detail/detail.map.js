import { getListDetail } from '../../../../reduxs';
const mapStateToProps = store => {
  const { detail } = store
  console.log(detail)
  return detail
};

const mapDispatchToProps = {
  getListDetail,
}
export const maps = {
  mapStateToProps,
  mapDispatchToProps
}
