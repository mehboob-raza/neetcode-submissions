class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map ={}
        for(let i=0; i<nums.length;i++){
            const initial = target - nums[i]
            if(initial in map){
                return [map[initial] , i]
            }

            map[nums[i]] = i
        }
    }
}

const sol = new Solution()
console.log(sol.twoSum([2,7,11,15], 9));
