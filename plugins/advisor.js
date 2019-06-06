export function findAdviceItems(content, adviceItems) {
    return adviceItems.filter((adviceItem) => {
        const negativeMatchWords = adviceItem.fields.matchConfig.negative;
        return negativeMatchWords.reduce(function(total, matchWord) {
            let index = content.indexOf(matchWord);
            if (index !== -1) {
                adviceItem.fields.indexOfMatch = index;
                adviceItem.fields.matchedOn = matchWord;
            }
            return total || index !== -1
        }, false);
    });
}
