class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let newStr = '';
        for(const char of s) {
            if(this.isAlphaNumeric(char)) newStr += char;
        }

        let left=0, right=newStr.length-1;
        while(left<right) {
            if(newStr[left++].toLowerCase() !== newStr[right--].toLowerCase()) return false;
        }

        return true;
    }

    isAlphaNumeric(char: string): boolean {
        return (
            (char >= 'a' && char <= 'z') || 
            (char >= 'A' && char <= 'Z') || 
            (char >= '0' && char <= '9')
        )
    }
}
