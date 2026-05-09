const addDays = require('date-fns/addDays')

const getthedays = days => {
  const newDate = addDays(new Date(2020, 7, 22), days)

  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`
}

module.exports = getthedays

/*
  git config --global user.email naikc8468@gmail.com
    git config --global user.name Chetannaik-9535
      git init
       git remote add origin https://github.com/Chetannaik-9535/Get-Date-After-x-Days.git
*/