const Date = require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };
  
  args.forEach(array => {
    combinedObject.users = [...combinedObject.users, ...array];
  });
  
  const today = new Date();
  combinedObject.merge_date = today.toString('M/d/yyyy');
  
  return combinedObject;
}

module.exports = {
  combineUsers
};