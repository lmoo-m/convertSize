const input = document.getElementById("input");
const output = document.getElementById("output");
const switchBtn = document.getElementById("switch");

let set = false;
output.innerHTML = "0 GB";
switchBtn.innerHTML = "MB";

switchBtn.addEventListener("click", () => {
    set = !set;
    output.innerHTML = `0${set ? " MB" : " GB"}`;
    switchBtn.innerHTML = `${set ? "GB" : "MB"}`;
});

const convertGbToMb = (size) => {
    const result = size * 1024;
    return format(result) + " MB";
};

const convertMbToGb = (size) => {
    const result = size / 1024;
    return result.toString().substring(0, 4) + " GB";
};

input.addEventListener("keyup", () => {
    const size = set ? convertGbToMb(input.value) : convertMbToGb(input.value);
    output.innerHTML = size;
});

const format = (number) => {
    const getNumberToIDR = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);

    const splitNumber = getNumberToIDR.split(",")[0];
    return splitNumber.replace(/Rp./, "");
};
