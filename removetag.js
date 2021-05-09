// test_Data = "<p><strong><em>skillsanta assignment</p></em></strong>"
// console.log(test_Data);
// document.write(test_Data);
function strip_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}

console.log(strip_tags('<p><strong><em>"SkillSanta assignments"</em></strong></p> '));
document.write("output in console---->");