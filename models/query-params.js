function QueryParams(obj = {}) {
  this.page = (obj && obj.page && Number(obj.page)) || 1;
  this.pageSize = (obj && obj.pageSize && Number(obj.pageSize)) || null;
  this.skip = (obj && obj.skip && Number(obj.skip)) || null;
  this.country = (obj && obj.country) || null;
  this.category = (obj && obj.category) || null;
}

module.exports.QueryParams = QueryParams;
