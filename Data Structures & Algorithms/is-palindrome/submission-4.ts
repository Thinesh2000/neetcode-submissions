class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        for(let i=0, j=s.length-1; i<j; i++, j--) {
            while(!this.isAlphaNumeric(s[i]) && i<j) i++;

            while(!this.isAlphaNumeric(s[j]) && i<j) j--;

            if(s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }
        }

        return true;
    }

    isAlphaNumeric(char: string): boolean {
        const charCode = char.toLowerCase().charCodeAt(0);
        return charCode >= 97 && charCode <= 122 || charCode>= 48 && charCode <= 57;
    }
}
