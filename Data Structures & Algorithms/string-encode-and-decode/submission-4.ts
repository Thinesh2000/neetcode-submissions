class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const separator = '#'
        return strs.reduce((acc, value, idx) => {
            return acc + value.length + separator + value
        }, "")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        console.log(str);

        const result: string[] = [];
        let len;
        for(let i=0, j=0; i<str.length; i++) {
            if(str[i]==='#') {
                len = Number(str.substring(j, i));

                let word = '';
                while(len--) {
                    word+=str[++i];
                }
                result.push(word);

                j=i+1;
            }
        }

        return result;
    }
}
