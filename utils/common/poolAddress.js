import FurionSwapPairs from "@/assets/info/FurionSwap.json";
import FarmingPools from "@/assets/info/FarmingPool.json";
import SeparatePools from "@/assets/info/SeparatePool.json";
import AggregatePools from "@/assets/info/AggregatePool.json";

const default_network = 'goerli'
export const getFurionSwapPairs = (network=default_network) => {
    let swap_pairs = FurionSwapPairs[network];
    return swap_pairs;
}

export const getFarmingPools = (network=default_network) => {
    let farming_pools = FarmingPools[network];
    return farming_pools;
}

export const getSeparatePools = (network=default_network) => {
    let separate_pools = SeparatePools[network];
    return separate_pools;
}

export const getAggregatePools = (network=default_network) => {
    let aggregate_pools = AggregatePools[network];
    return aggregate_pools;
}