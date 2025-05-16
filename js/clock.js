const digitPatterns = {
    '0': [[1, 1, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 1]],
    '1': [[0, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
    '2': [[1, 1, 1], [0, 0, 1], [1, 1, 1], [1, 0, 0], [1, 1, 1]],
    '3': [[1, 1, 1], [0, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
    '4': [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]],
    '5': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
    '6': [[1, 1, 1], [1, 0, 0], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
    '7': [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 0, 0]],
    '8': [[1, 1, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 1, 1]],
    '9': [[1, 1, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [1, 1, 1]],
    ':': [[0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]]
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
                td.style.background = cell ? '#00F' : '#FF0';
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
const tables = bigNumber.render('1234567890;');
const output = document.getElementById('output');
output.innerHTML = '';
tables.forEach(table => output.appendChild(table));