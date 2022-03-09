export default
    [
        {
            type: "population",
            ans: /population/gi
        },
        {
            type: "capital",
            ans: /capital/gi
        },
        {
            type: "premier",
            ans: /(premier?|governor?)/gi
        },
        {
            type: "largest city",
            ans: /largest city/gi
        },
        {
            type: "places to visit",
            ans: /(visit?|holiday?|vacation?|travel?)/gi
        },
        {
            type: "travel to Vancouver Island",
            ans: /(travel|go|going).*?(Vancouver Island).*?/gi
        },
        {
            type: "parks",
            ans: /(national|provincial) park?|park?/gi
        },
        {
            type: "history",
            ans: /(summa?(ry|rize|rise)|learn)/gi
        },
        {
            type: "first nations",
            ans: /(first nation?|indigenous)/gi
        },
        {
            type: "climate",
            ans: /(climate|weather)/gi
        },

        {
            type: "greeting",
            ans: /\b(H(ello|i))\b/gi
        },


        {
            type: "history",
            ans: /history/gi
        },

    ]