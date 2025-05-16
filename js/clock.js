const digitPatterns = {
    '0': [[], [], [], [], []],
    '1': [[1], [1], [1], [1], [1]],
    '2': [[], [], [], [], []],
    '3': [[], [], [], [], []],
    '4': [[], [], [], [], []],
    '5': [[], [], [], [], []],
    '6': [[], [], [], [], []],
    '7': [[], [], [], [], []],
    '8': [[], [], [], [], []],
    '9': [[], [], [], [], []],
    ':': [[], [], [], [], []]
};

// 생성자 함수를 이용해 Bit-Text 생성
function BigNumber(patterns) {
    this.patterns = patterns;
}

BigNumber.prototype.render = function (text, cellSize = 20, fillColor = '#333') {
    const tables = [];

    for (const ch of text) {
        const arr = this.patterns[ch];
        if (!arr) continue;

        // 테이블 요소 생성
        const table = document.createElement('table');
        table.style.borderCollapse = 'collapse';
        table.style.display = 'inline-block';
        table.style.marginRight = '8px';
        table.style.verticalAlign = 'top';

        arr.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.style.width = cellSize + 'px';
                td.style.height = cellSize + 'px';
                td.style.border = '1px solid #eee';
                td.style.background = '#000';
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

        tables.push(table);
    }

    return tables;
};

// 숫자 출력

const bigNumber = new BigNumber(digitPatterns);
const tables = bigNumber.render('1');
const output = document.getElementById('output');
output.innerHTML = '';
tables.forEach(table => output.appendChild(table));