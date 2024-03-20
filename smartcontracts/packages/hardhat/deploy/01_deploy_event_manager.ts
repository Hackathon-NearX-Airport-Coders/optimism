import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployEventManager: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("EventManager", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployEventManager;

deployEventManager.tags = ["EventManager"];
