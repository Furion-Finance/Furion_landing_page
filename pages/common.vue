<script type="text/javascript">
import { initAvatars, getVolumeItem, NftPrices } from '@/config/collection/aggregate_pools';
import getCharts from "@/utils/getCharts";
    let rational = 0;
    let ready = false;
    let list = [
        {
          id: 0,
          name: "BAYC Ecosystem",
          avatar: require("@/assets/images/aggregate_pool/bayc_eco.gif"),
          volume: "38122",
          _24h: "-2.9%",
          _7d: "+10%",
          items: "766",
          fft_price: "0.01",
          last_7d: [
            "10",
            "22",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
            "10",
            "22",
            "10",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
          ],
          last_7d_type: 1,
          collections: [
            {
              name: "BAYC",
              symbol: "BAYC",
              avatar: require("@/assets/images/aggregate_pool/bayc.png"),
              staked: "21"
            },
            {
              name: "MAYC",
              symbol: "MAYC",
              avatar: require("@/assets/images/aggregate_pool/mayc.png"),
              staked: "11"
            },
            {
              name: "Otherdeed",
              symbol: "OTHR",
              avatar: require("@/assets/images/aggregate_pool/other.png"),
              staked: "5"
            },
            {
              name: "BAKC",
              symbol: "BAKC",
              avatar: require("@/assets/images/aggregate_pool/bakc.png"),
              staked: "7"
            },
          ]
        },

        {
          id: 1,
          name: "Bluechips",
          avatar: require("@/assets/images/aggregate_pool/bluechips.gif"),
          volume: "22545",
          _24h: "+4.8%",
          _7d: "+15.1%",
          items: "464",
          fft_price: "0.01",
          last_7d: [
            "10",
            "22",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
            "10",
            "22",
            "10",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
          ],
          last_7d_type: 1,
          collections: [
            {
              name: "CryptoPunks",
              symbol: "PUNKS",
              avatar: require("@/assets/images/aggregate_pool/punks.png"),
              staked: "5"
            },
            {
              name: "Azuki",
              symbol: "AZUKI",
              avatar: require("@/assets/images/aggregate_pool/azuki.png"),
              staked: "45"
            },
            {
              name: "Doodles",
              symbol: "DOODLE",
              avatar: require("@/assets/images/aggregate_pool/doodles.png"),
              staked: "4"
            },
            {
              name: "BAYC",
              symbol: "BAYC",
              avatar: require("@/assets/images/aggregate_pool/bayc.png"),
              staked: "9"
            },
            {
              name: "Meebits",
              symbol: "Meebits",
              avatar: require("@/assets/images/aggregate_pool/meebits.png"),
              staked: "6"
            },
          ]
        },

        {
          id: 2,
          name: "Dark Horses",
          avatar: require("@/assets/images/aggregate_pool/dark_horses.gif"),
          volume: "42543",
          _24h: "+7.7%",
          _7d: "+20.2%",
          items: "792",
          fft_price: "0.01",
          last_7d: [
            "10",
            "22",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
            "10",
            "22",
            "10",
            "50",
            "13",
            "31",
            "15",
            "0",
            "22",
          ],
          last_7d_type: 1,
          collections: [
            {
              name: "Weirdo Ghost Gang",
              symbol: "GHOST",
              avatar: require("@/assets/images/aggregate_pool/ghost.gif"),
              staked: "14"
            },
            {
              name: "Catddle",
              symbol: "CAT",
              avatar: require("@/assets/images/aggregate_pool/catddle.png"),
              staked: "14"
            },
            {
              name: "Mimic Shhans",
              symbol: "MS",
              avatar: require("@/assets/images/aggregate_pool/shhans.png"),
              staked: "17"
            },
          ]
        },
      ]
function update_list (list){
    console.log('global list');
    list = list;
    ready = true;

}
export default {
    rational,
    ready,
    list,
    update_list
}
</script>