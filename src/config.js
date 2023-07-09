const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Beardo's";
const description = "Beard's,Buds,Bros";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "BBB",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://medcrafttherapeutics.ca/contact-us",
  creators: [{name: "Demian Beardo Melnyk"},
    {
      address: "0x5d61e55e6bf49be06c34e07619c5c57b06523fa8",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 250,
    layersOrder: [
      { name: "Background"},
      { name: "ShadowPop" },
      { name: "Beard" },
      { name: "BeardHighlights" },
      { name: "BeardLowLights" },
      { name: "Face Skin" },
      { name: "Face Highlights" },
      { name: "Hat Main" },
      { name: "EyeLid" },
      { name: "Hat Main" },
      { name: "Hat Shadow" },
      { name: "Beard Leaves" },
      { name: "Whites" },
      { name: "Outline" },
      { name: "EarRings" },
      { name: "Shades" },  
      { name: "Tag" },      
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 500,
  height: 1000,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 5 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creator: "Demian BEARDO Melnyk",
  homebase: "https://medcrafttherapeutics.ca/",};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 50,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "HereTheyCome.png",
};

const preview_gif = {
  numberOfImages: 250,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "DontBlink.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
