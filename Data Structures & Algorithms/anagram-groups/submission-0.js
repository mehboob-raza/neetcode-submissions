class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {}
        for(let word of strs){
            const sorted = word.split("").sort().join("")

            if(!(sorted in map)){
                map[sorted] = []
            }

            map[sorted].push(word)
        }
        return Object.values(map)
    }
}

const sol = new Solution()
console.log(sol.groupAnagrams(["act","pots","tops","cat","stop","hat"]))