import { getNftInfo, getNftInfoByProject, getNftInfoByAddress, getNftWeekPrice } from "@/api/nft_info";
import getCharts from "@/utils/getCharts";
import { getAddress, getSeparatePoolFactoryABI } from "@/utils/common/contractABI";
import { getContract } from "@/utils/common/index";

export const nft_info = {
    init: false,
    nft_list: [
        {
            "id": 0,
            "collection": "Cryptoadz",
            "address": "0x7e357a7ee77872ddd51947f1550381ba0913920b",
            "symbol": "TOADZ",
            "avatar": "https://lh3.googleusercontent.com/iofetZEyiEIGcNyJKpbOafb_efJyeo7QOYnTog8qcQJhqoBU-Vu9l3lXidZhXOAdu6dj4fzWW6BZDU5vLseC-K03rMMu-_j2LvwcbHo=s120",
            "banner_url": "https://lh3.googleusercontent.com/fUxEZ8mnuCho4KrCZDVckFz4mSr8QwjpS05SP-Zei2P_rw7N81cBD__0YwWsACd1Y0qLZgvdMPhUmfPe17J51QQjShlmTTXxj2G7-PQ=s2500",
            "description": "CrypToadz are a collection 6969 small amphibious creatures trying to escape the tyrannical rule of the Evil King Gremplin. Created by Gremplin, with a small bit of help from his friends.\\r\\n\\r\\nThis project is in the public domain. Feel free to use the toadz in any way you want.",
            "external_link": "https://cryptoadz.io",
            "twitter_link": "https://twitter.com/cryptoadzNFT",
            "volume": 71058,
            "_24h": "+90.56%",
            "_7d": "+17.59%",
            "floor_price": "1.67",
            "owners": 76683307,
            "items": 7025,
            "fXprice": "2.00",
            "last7Days": [
                357.21,
                356.45439999999996,
                306.25,
                285.2721,
                272.18400399999996,
                225,
                278.89
            ],
            "last7Days_type": 2,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            357.21,
                            356.45439999999996,
                            306.25,
                            285.2721,
                            272.18400399999996,
                            225,
                            278.89
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#ED5959",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 1,
            "collection": "Invisible Friends",
            "address": "0x52b1fb4766e876656ccfd3f4c6cd9dd8f6153abc",
            "symbol": "INVSBLE",
            "avatar": "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s120",
            "banner_url": "https://lh3.googleusercontent.com/FtZWWUOArzD6WPyQ97rumWFhxm8IxFHNYg0Jucx0TdJ31q3VVDqnJ4nFu1RdC68fYEnFtvvtdoT2PrqFhyxDb3jcVXA3c_QfJnpiBNM=s2500",
            "description": "Hiding in the metaverse.\\r\\n\\r\\nInvisible Friends is a collection of 5000 animated invisible characters by Markus Magnusson.\\r\\n\\r\\nInvisible Friends is a Random Character Collective project.\\r\\n\\r\\nSee also ARRAY[Invisible Friends Specials](https://opensea.io/collection/invisiblefriends-specials).",
            "external_link": "https://invisiblefriends.io",
            "twitter_link": "https://twitter.com/InvsbleFriends",
            "volume": 43761,
            "_24h": "-30.74%",
            "_7d": "-1.04%",
            "floor_price": "1.59",
            "owners": 127635912,
            "items": 5000,
            "fXprice": "2.50",
            "last7Days": [
                515.29,
                484.00000000000006,
                441,
                357.21,
                342.25000000000006,
                288.966001,
                239.909121
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            515.29,
                            484.00000000000006,
                            441,
                            357.21,
                            342.25000000000006,
                            288.966001,
                            239.909121
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 2,
            "collection": "Cool Cats",
            "address": "0x1d788a3d8133f79a7d8cf2517c4b3c00c8dbbf82",
            "symbol": "COOL",
            "avatar": "https://lh3.googleusercontent.com/LIov33kogXOK4XZd2ESj29sqm_Hww5JSdO7AFn5wjt8xgnJJ0UpNV9yITqxra3s_LMEW1AnnrgOVB_hDpjJRA1uF4skI5Sdi_9rULi8=s120",
            "banner_url": "https://lh3.googleusercontent.com/H4Iu36XQNJqVlF99-0BuQna0sUlUcIrHt97ss3le_tAWw8DveEBfTktX3S0bP6jpC9FhN1CKZjoYzZFXpWjr1xZfQIwSSLeDjdi0jw=s2500",
            "description": "Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs that exist on the Ethereum Blockchain. Cool Cat holders can participate in exclusive events such as NFT claims, raffles, community giveaways, and more. Remember, all cats are cool, but some are cooler than others.\\r\\n\\r\\n- ARRAY[Cool Cats Collabs](https://opensea.io/collection/cool-cats-collabs)\\r\\n- ARRAY[Cool Cats Events](https://opensea.io/collection/cool-cats-events)\\r\\n- ARRAY[Cool Cats Achievements](https://opensea.io/collection/cool-cats-achievements)\\r\\n- ARRAY[Cool Cats Originals](https://opensea.io/collection/cool-cats-originals)",
            "external_link": "http://coolcatsnft.com",
            "twitter_link": "https://twitter.com/coolcatsnft",
            "volume": 111099,
            "_24h": "+101.91%",
            "_7d": "+84.55%",
            "floor_price": "2.42",
            "owners": 20414503,
            "items": 9941,
            "fXprice": "3.00",
            "last7Days": [
                570.7321,
                644.5505440000001,
                538.24,
                549.574249,
                451.5625,
                449.44000000000005,
                466.1280999999999
            ],
            "last7Days_type": 2,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(255, 155, 155, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            570.7321,
                            644.5505440000001,
                            538.24,
                            549.574249,
                            451.5625,
                            449.44000000000005,
                            466.1280999999999
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#ED5959",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 3,
            "collection": "World Of Women",
            "address": "0x436643cb41f6b3cb375ad87bc95833b460add4a6",
            "symbol": "WOW",
            "avatar": "https://lh3.googleusercontent.com/EFAQpIktMBU5SU0TqSdPWZ4byHr3hFirL_mATsR8KWhM5z-GJljX8E73V933lkyKgv2SAFlfRRjGsWvWbQQmJAwu3F2FDXVa1C9F",
            "banner_url": "https://lh3.googleusercontent.com/GHhptRLebBOWOy8kfXpYCVqsqdes-1-6I_jbuRnGTHHW6TD63CtciH75Dotfu2u8v6EmkWt-tjhkFRVLxRUwgMfKqqy5W24AolJayeo=s2500",
            "description": "A community celebrating representation, inclusivity, and equal opportunities for all.\\r\\nUnited by a first-of-its-kind collection, featuring 10,000 artworks of diverse and powerful women.\\r\\n\\r\\nCreated and Illustrated by Yam Karkai (@ykarkai)\\r\\n\\r\\nNew official collection World of Women Galaxy available here:\\r\\nhttps://opensea.io/collection/world-of-women-galaxy",
            "external_link": "http://worldofwomen.art",
            "twitter_link": "https://twitter.com/worldofwomennft",
            "volume": 71808,
            "_24h": "+22.75%",
            "_7d": "+5.82%",
            "floor_price": "2.65",
            "owners": 56314509,
            "items": 10000,
            "fXprice": "3.50",
            "last7Days": [
                1024.0000000000002,
                1024.0000000000002,
                1056.25,
                992.25,
                863.7721000000001,
                827.1376,
                723.6099999999999
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            1024.0000000000002,
                            1024.0000000000002,
                            1056.25,
                            992.25,
                            863.7721000000001,
                            827.1376,
                            723.6099999999999
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 4,
            "collection": "PudgyPenguins",
            "address": "0xbd62acbb0ef08e7db4af2d77a27156b9aafeffc4",
            "symbol": "PPG",
            "avatar": "https://lh3.googleusercontent.com/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi=s120",
            "banner_url": "https://lh3.googleusercontent.com/13g3FRwKuCmawyeH_rN5VwYbQZ8KrWdN8IZf4_uKJ3IeLjligIY7ZZ_HR7b48RKUJuUfevFTMzxFJcBWdn51TyZVoAXNPqh1TCIprw=s2500",
            "description": "Pudgy Penguins is a collection of 8,888 NFTs, waddling through Web3. Embodying empathy & compassion, Pudgy Penguins are a beacon of positivity in the NFT Space. Each holder receives exclusive access to experiences, events, and more. \\n\\nJoin the Huddle now and spread good vibes across the meta. \\n\\nARRAY[pudgypenguins.com](https://pudgypenguins.com)\\n\\nPudgy Collections:\\nARRAY[Lil Pudgys](https://opensea.io/collection/lilpudgys) | ARRAY[Pudgy Rods](https://opensea.io/collection/pudgyrods)",
            "external_link": "https://www.pudgypenguins.com/",
            "twitter_link": "https://twitter.com/pudgypenguins",
            "volume": 57585,
            "_24h": "+39.67%",
            "_7d": "+330.66%",
            "floor_price": "2.19",
            "owners": 451282753,
            "items": 8888,
            "fXprice": "2.00",
            "last7Days": [
                590.0040999999999,
                676.0000000000001,
                899.7600160000001,
                829.4399999999999,
                571.21,
                551.7801000000002,
                492.8400000000001
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            590.0040999999999,
                            676.0000000000001,
                            899.7600160000001,
                            829.4399999999999,
                            571.21,
                            551.7801000000002,
                            492.8400000000001
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        },
        {
            "id": 5,
            "collection": "CryptoDickbutts S3",
            "address": "0xd8179759c9cb237123bb5eb8b035561457790be6",
            "symbol": "CDB",
            "avatar": "https://lh3.googleusercontent.com/vw-gp8yUYkQsxQN5xbHrWEhY7rQWQZhIjgO2tvLxu46VY6iwulwWZt5VFS2Q9gy9qJaiJk8QspZs0qaM9z1ODeIyeUUseABOxdfVrC8=s120",
            "banner_url": "https://lh3.googleusercontent.com/BKe5JQV60t_ExHygABrea_2-ZrDTanAZng6sGePzffYJHb7OdTw-G8JqTcOqRzYcAZQIHeZbhSbgoYv6ionrwxkFU6Wb9TKdwUWK-g=s2500",
            "description": "Once a utopia, Gooch Island has fallen and CryptoDickbutts have been evacuated. Series 3 features 5200 all new CryptoDickbutts, each with a set of randomly generated traits.\\r\\n\\r\\nKeep away from children.\\r\\n\\r\\nJoin the Discord: https://discord.gg/uhRmzP7Uuu\\r\\nTwitter: https://twitter.com/CryptoDickbutts",
            "external_link": "https://cryptodickbutts.com/",
            "twitter_link": "https://twitter.com/CryptoDickbutts",
            "volume": 10019,
            "_24h": "+91.25%",
            "_7d": "-59.64%",
            "floor_price": "3.36",
            "owners": 58539135,
            "items": 5200,
            "fXprice": "3.50",
            "last7Days": [
                1056.1850009999998,
                1190.2500000000002,
                1296,
                1257.4116,
                1296,
                1186.8025,
                960.752016
            ],
            "last7Days_type": 1,
            "option": {
                "tooltip": {
                    "show": false,
                    "trigger": "axis"
                },
                "lineStyle": {
                    "normal": {
                        "color": "#32A8FF"
                    }
                },
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "offset": 0,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 0.4,
                                "color": "rgba(143, 242, 179, 0.4)"
                            },
                            {
                                "offset": 1,
                                "color": "rgba(255, 255, 255, 0)"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    }
                },
                "grid": {
                    "left": "0",
                    "width": "100%",
                    "top": "0",
                    "height": "100%"
                },
                "xAxis": {
                    "show": false,
                    "type": "category",
                    "boundaryGap": false,
                    "data": []
                },
                "yAxis": {
                    "show": false,
                    "type": "value",
                    "data": [
                        "0"
                    ]
                },
                "series": [
                    {
                        "type": "line",
                        "stack": "",
                        "areaStyle": {
                            "normal": {}
                        },
                        "data": [
                            1056.1850009999998,
                            1190.2500000000002,
                            1296,
                            1257.4116,
                            1296,
                            1186.8025,
                            960.752016
                        ],
                        "itemStyle": {
                            "normal": {
                                "color": "#77CA95",
                                "lineStyle": {
                                    "width": 2
                                }
                            }
                        },
                        "symbolSize": 0
                    }
                ]
            }
        }
    ]
};

export const initNftInfo = async (network) => {
    let nft_info = { nft_init: false, nft_list: [] };

    let result = await getNftInfo(network);
    console.log('NFT info request', result);
    let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = 0; i < raw_data.length; i++) {
        let temp = {
            id: i,
            collection: raw_data[i]['project'],
            address: raw_data[i]['address'],
            symbol: raw_data[i]['symbol'],
            avatar: raw_data[i]['image_url'],
            banner_url: raw_data[i]['banner_url'],
            description: raw_data[i]['description'],
            external_link: raw_data[i]['external_link'],
            twitter_link: raw_data[i]['twitter_link'],

            volume: raw_data[i]['volume'],
            _24h: `${(raw_data[i]['_24hs'] < 0 ? "" : "+") + (raw_data[i]['_24hs'] * 100).toFixed(2)}%`,
            _7d: `${(raw_data[i]['_7ds'] < 0 ? "" : "+") + (raw_data[i]['_7ds'] * 100).toFixed(2)}%`,
            floor_price: raw_data[i]['floor_price'].toFixed(2),
            owners: raw_data[i]['owners'],
            items: raw_data[i]['total_supply'],
            fXprice: raw_data[i]['reference_price_high'].toFixed(2),
            last7Days: raw_data[i]['week_price'],
            last7Days_type: raw_data[i]['type'],
        };
        final_result.push(temp);
    }
    final_result = final_result.map((item) => {
        return {
            ...item,
            option: getCharts(item.last7Days, item.last7Days_type)
        };
    });

    // console.log(final_result)


    nft_info.nft_list = final_result;
    nft_info.init = true;
    return nft_info;
}

export const initPooledNftInfo = async (network) => {
    let nft_info = { nft_init: false, nft_list: [] };

    const factoryContract = await getContract(await getSeparatePoolFactoryABI(), '');
    const nftsWithPool = await factoryContract.methods.getAllNfts().call();

    // console.log('NFT inside the pool', nftsWithPool);

    // let result = await getNftInfo(network);
    // let raw_data = result['data']['data'];
    let final_result = [];

    for (let i = 0; i < nftsWithPool.length; i++) {
        const nftAddress = nftsWithPool[i].toLowerCase();

        if (nftAddress != getAddress()['CoolCats'].toLowerCase()) {
            continue
        }
        // Assume collection is found in contract but not in backend
        let temp = {
            id: i,
            collection: "--",
            address: nftAddress,
            symbol: "--",
            avatar: "--",
            banner_url: "--",
            description: "--",
            external_link: "--",
            twitter_link: "--",

            volume: "--",
            _24h: "--",
            _7d: "--",
            floor_price: "--",
            owners: "--",
            items: "--",
            fXprice: "--",
            last7Days: "--",
            last7Days_type: "--",
        };
        try {
            let raw_data = (await getNftInfoByAddress(nftAddress, network))['data']['data'];
            // console.log('Single record', raw_data);
            temp.collection = raw_data['project'];
            temp.symbol = raw_data['symbol'];
            temp.avatar = raw_data['image_url'];
            temp.banner_url = raw_data['banner_url'];
            temp.description = raw_data['description'];
            temp.external_link = raw_data['external_link'];
            temp.twitter_link = raw_data['twitter_link'];

            temp.volume = raw_data['volume'];
            temp._24h = `${(raw_data['_24hs'] < 0 ? "" : "+") + (raw_data['_24hs'] * 100).toFixed(2)}%`;
            temp._7d = `${(raw_data['_7ds'] < 0 ? "" : "+") + (raw_data['_7ds'] * 100).toFixed(2)}%`;
            temp.floor_price = raw_data['floor_price'].toFixed(2);
            temp.owners = raw_data['owners'];
            temp.items = raw_data['total_supply'];
            temp.fXprice = raw_data['reference_price_high'].toFixed(2);
            temp.last7Days = raw_data['week_price'];
            temp.last7Days_type = raw_data['type'];

        } catch (e) {

        }

        // Collection is found in contract but not in backend
        final_result.push(temp);
    }

    final_result = final_result.map((item) => {
        return {
            ...item,
            option: getCharts(item.last7Days, item.last7Days_type)
        };
    });

    nft_info.nft_list = final_result;
    nft_info.init = true;
    return nft_info;
}
