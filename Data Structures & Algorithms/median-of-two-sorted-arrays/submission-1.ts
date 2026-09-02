class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const total = nums1.length + nums2.length;
        const half = Math.floor(total/2);

        if(nums1.length > nums2.length) {
            let temp = nums1;
            nums1=nums2;
            nums2=temp;
        }

        // loop until partitioned
        let l=0, r=nums1.length-1;
        while(true) {
            const i = Math.floor((l+r)/2);
            const j = half - i - 2;

            const nums1l = nums1[i] ?? -Infinity, nums1r=nums1[i+1] ?? Infinity;
            const nums2l = nums2[j] ?? -Infinity, nums2r = nums2[j+1] ?? Infinity;
            if(nums1l<=nums2r && nums2l<=nums1r) {
                if(total % 2) return Math.min(nums1r, nums2r)
                else return (Math.max(nums1l, nums2l) + Math.min(nums1r, nums2r))/2;
            } else if(nums1l>nums2r) {
                r = i-1;
            } else {
                l = i+1;
            }
        }
    }
}
