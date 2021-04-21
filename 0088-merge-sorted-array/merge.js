const merge = (nums1, m, nums2, n) => {
    // from largest to smallest in nums

    for (let cur = m + n - 1; cur >= 0; --cur) {
        // nums2 done
        if (n === 0) return nums1
        // nums1 done
        if (m === 0) {
            nums1[cur] = nums2[n-1]
            n--
        } else {
            if (nums2[n-1] >= nums1[m-1]) {
                // the biggest of remianning nums2  > the biggest nums1 remains
                nums1[cur] = nums2[n-1]
                n--

            } else {
                nums1[cur] = nums1[m-1]
                m--
            }
        }
    }
}
console.log(merge([1,2,3,0,0,0],3, [2,5,6],3))
