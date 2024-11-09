import {
    c as m,
    h as l,
    l as t,
    r as c
} from "./index-IT1gKaF9.js";
import {
    W as n
} from "./web3-FmIaR_iU.js";
const S = () => {
    const {
        setCoinStakeInfo: u,
        coinStakeInfo: i
    } = m(), {
        loading: a,
        refetch: o
    } = l({
        contracts: [{ ...t,
            functionName: "getRewardRatio"
        }, { ...t,
            functionName: "getMinStakeAmount"
        }, { ...t,
            functionName: "getRewardTokenBalance"
        }, { ...t,
            functionName: "getTotalCoinStaked"
        }, { ...t,
            functionName: "getTotalRewardPaid"
        }, { ...t,
            functionName: "getTotalStakerCount"
        }, { ...t,
            functionName: "paused"
        }, { ...t,
            functionName: "getTimeUnit"
        }],
        enabled: !1,
        onSuccess(e) {
            u(s => ({ ...s,
                numerator: e[0].result[0].map(r => Number(r)),
                denominator: e[0].result[1].map(r => Number(r)),
                ratioAmount: e[0].result[2].map(r => Number(n.utils.fromWei(r.toString(), "ether"))),
                minStakeAmount: Number(n.utils.fromWei(e[1].result.toString(), "ether")),
                rewardTokenBalance: Number(n.utils.fromWei(e[2].result.toString(), "ether")),
                totalCoinStaked: Number(n.utils.fromWei(e[3].result.toString(), "ether")),
                totalRewardPaid: Number(n.utils.fromWei(e[4].result.toString(), "ether")),
                totalStakerCount: Number(e[5].result),
                paused: e[6].result,
                timeUnit: Number(e[7].result),
                init: !0
            }))
        }
    });
    return c.useEffect(() => {
        i.init || o()
    }, []), {
        loading: a,
        refetch: o
    }
};
export {
    S as u
};