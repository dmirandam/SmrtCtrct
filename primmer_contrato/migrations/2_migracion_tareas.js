const Tareas = artifacts.require("Tareas");

module.exports = function (deployer) {
  deployer.deploy(Tareas);
};
