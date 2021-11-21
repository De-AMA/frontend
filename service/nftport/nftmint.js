import axios from "axios";
export const   uploadFile = async()=> {
    const form = new FormData();
    const fileStream = fs.createReadStream("image.png");
    form.append("file", fileStream);
    const res = await axios.post("https://api.nftport.xyz/v0/files", form, {
      headers: {
        Authorization: process.env.API_KEY_NFTPORT,
        ...form.getHeaders(),
      },
    });
  
    const url = res.data.ipfs_url;
    return url;
  }


export const uploadmetadata = async (body) =>
  axios({
    method: "post", // default
    baseURL: "https://api.nftport.xyz/v0/metadata",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: process.env.REACT_APP_NFT_PORT_KEY,
    },
    data: { ...body },
  });

export const customizableMint = async (address, uri) =>
  axios({
    method: "post", // default
    baseURL: "https://api.nftport.xyz/v0/mints/customizable",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: process.env.REACT_APP_NFT_PORT_KEY,
    },
    data:  {
        chain: "rinkeby",
        contract_address: "0xCCAebaA0C8A1a1fBE7e9A879167ae7f74FeE6a5d",
        metadata_uri: uri,
        mint_to_address: address,
      }
  });



export const search = async (body,query) => axios.request({
      method: "GET",
      url: "https://api.nftport.xyz/text_search",
      params: {
        text: query,
        // chain: "polygon",
        filter_by_contract_address:
          "method: 'GET',   url: 'https://api.nftport.xyz/nfts/0xdf8ca29feb47b012dbb5dd885b78520b93e0b574',   params: {chain: 'polygon', include: 'metadata'},   headers: {     'Content-Type': 'application/json',     Authorization: '63286490-55df-4b69-8967-4172eef39e9b'   }",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_NFT_PORT_KEY,
      },
      data: { ...body },
});


export const getNFTs =  async (address) =axios.request({
    method: "GET",
    url: "https://api.nftport.xyz/nfts/"+address,
    params: { chain: "polygon", include: "metadata" },
    headers: {
      "Content-Type": "application/json",
      Authorization: "63286490-55df-4b69-8967-4172eef39e9b",
    },
  });



