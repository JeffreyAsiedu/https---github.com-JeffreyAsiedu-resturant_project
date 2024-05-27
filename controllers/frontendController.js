const home = (req, res) => {
  res.render("index");
};

const about = (req, res) => {
  res.render("about");
};

const menu = (req, res) => {
  res.render("menu");
};

const chefs = (req, res) => {
  res.render("chefs");
};

const gallery = (req, res) => {
  res.render("gallery");
};

const contact = (req, res) => {
  res.render("contact");
};

module.exports = {
  home,
  about,
  menu,
  chefs,
  gallery,
  contact,
};
