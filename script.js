/* ==========================================
   FORTRESS TACTICAL DESIGN SYSTEM - SCRIPT
   ================================---------- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SIDEBAR NAVIGATION SWITCHER
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('data-section');

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            sections.forEach(sec => {
                sec.classList.remove('active');
                if(sec.id === targetId) {
                    sec.classList.add('active');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 2. DARK / LIGHT THEME TOGGLE
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlRoot = document.documentElement;
    const themeText = themeToggleBtn.querySelector('.theme-text');
    const themeIcon = themeToggleBtn.querySelector('i');

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlRoot.getAttribute('data-theme');
        if(currentTheme === 'dark') {
            htmlRoot.setAttribute('data-theme', 'light');
            themeText.textContent = 'Light Mode';
            themeIcon.className = 'fa-solid fa-sun';
        } else {
            htmlRoot.setAttribute('data-theme', 'dark');
            themeText.textContent = 'Dark Mode';
            themeIcon.className = 'fa-solid fa-moon';
        }
    });

    // Segmented mode buttons in dashboard
    const segButtons = document.querySelectorAll('.seg-btn[data-mode]');
    segButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            segButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mode = btn.getAttribute('data-mode');
            htmlRoot.setAttribute('data-theme', mode);
            if(mode === 'light') {
                themeText.textContent = 'Light Mode';
                themeIcon.className = 'fa-solid fa-sun';
            } else {
                themeText.textContent = 'Dark Mode';
                themeIcon.className = 'fa-solid fa-moon';
            }
        });
    });

    // 3. GENERATE 20 WEBSITE BACKGROUNDS
    const bgGallery = document.getElementById('bgGallery');
    const backgroundData = [
        // Texture-based (10)
        { name: "Brushed Steel", type: "texture", icon: "fa-sliders", desc: "Subtle horizontal metallic grain providing high-end industrial weight." },
        { name: "Tactical Stone", type: "texture", icon: "fa-mountain", desc: "Monolithic dark stone texture optimized for strategy interfaces." },
        { name: "Industrial Concrete", type: "texture", icon: "fa-building", desc: "Clean matte concrete finish with minimal grain distraction." },
        { name: "Carbon Grid", type: "texture", icon: "fa-border-all", desc: "Precision carbon-fiber weave for a modern cyber-tactical edge." },
        { name: "Dark Cast Iron", type: "texture", icon: "fa-shield", desc: "Heavy forged iron surface with subtle light reflections." },
        { name: "Anodized Titanium", type: "texture", icon: "fa-bolt", desc: "Sleek aerospace-grade titanium plate texture." },
        { name: "Gunmetal Mesh", type: "texture", icon: "fa-network-wired", desc: "Subdued tactical mesh offering depth without visual clutter." },
        { name: "Obsidian Slate", type: "texture", icon: "fa-gem", desc: "Smooth polished slate with deep charcoal tones." },
        { name: "Matte Alloy", type: "texture", icon: "fa-shield-halved", desc: "Low-glare matte metal finish designed for extended game sessions." },
        { name: "Rough Galvanized", type: "texture", icon: "fa-industry", desc: "Slightly weathered steel providing rugged strategic atmosphere." },

        // Natural / Organic (10)
        { name: "Dark Walnut Wood", type: "natural", icon: "fa-tree", desc: "Deep organic wood grain reminiscent of classic tournament board tables." },
        { name: "Compressed Earth", type: "natural", icon: "fa-earth-americas", desc: "Earthy matte clay tone with subtle natural particulate texture." },
        { name: "Granite Rock", type: "natural", icon: "fa-mountain-sun", desc: "Solid granite mineral pattern with natural crystalline depth." },
        { name: "Deep Forest Pine", type: "natural", icon: "fa-seedling", desc: "Dark muted forest timber tone for calm tactical clarity." },
        { name: "Volcanic Basalt", type: "natural", icon: "fa-fire", desc: "Raw volcanic rock texture with dark charcoal and ash hues." },
        { name: "Weathered Oak", type: "natural", icon: "fa-leaf", desc: "Aged timber grain featuring subtle organic imperfections." },
        { name: "Desert Sandstone", type: "natural", icon: "fa-sun", desc: "Warm monolithic stone tone providing high contrast warmth." },
        { name: "Riverbed Shale", type: "natural", icon: "fa-water", desc: "Smooth aquatic stone strata with natural matte finish." },
        { name: "Raw Umber Earth", type: "natural", icon: "fa-globe", desc: "Deep grounding soil hue ensuring neutral interface separation." },
        { name: "Ancient Slate", type: "natural", icon: "fa-monument", desc: "Aged natural stone surface with timeless competitive weight." }
    ];

    function renderBackgrounds(filter = 'all') {
        bgGallery.innerHTML = '';
        backgroundData
            .filter(item => filter === 'all' || item.type === filter)
            .forEach(bg => {
                const card = document.createElement('div');
                card.className = 'gallery-card';
                card.innerHTML = `
                    <div class="card-preview-box" style="background: var(--bg-primary);">
                        <i class="fa-solid ${bg.icon}"></i>
                    </div>
                    <div class="card-info">
                        <h4>${bg.name}</h4>
                        <p>${bg.desc}</p>
                        <span class="badge-type">${bg.type.toUpperCase()}</span>
                    </div>
                `;
                bgGallery.appendChild(card);
            });
    }
    renderBackgrounds();

    // Background filter buttons
    const bgFilterBtns = document.querySelectorAll('#backgrounds .filter-btn');
    bgFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            bgFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBackgrounds(btn.getAttribute('data-filter'));
        });
    });

    // 4. GENERATE 20 BOARD THEMES
    const boardGallery = document.getElementById('boardGallery');
    const boardData = [
        // Texture Boards (10)
        { name: "Onyx & Titanium", type: "texture", icon: "fa-chess-board", desc: "High contrast metallic grid with laser-sharp square definition." },
        { name: "Steel & Gunmetal", type: "texture", icon: "fa-shield", desc: "Brushed steel alternating squares for maximum tournament clarity." },
        { name: "Carbon Tactical", type: "texture", icon: "fa-border-all", desc: "Matte carbon weave board with gold selection highlights." },
        { name: "Cast Iron Grid", type: "texture", icon: "fa-industry", desc: "Industrial heavy metal board designed for ruthless competitive play." },
        { name: "Anodized Slate", type: "texture", icon: "fa-gem", desc: "Smooth dark metallic tiles with crisp boundary borders." },
        { name: "Obsidian Alloy", type: "texture", icon: "fa-bolt", desc: "Dark alloy finish providing ultimate piece silhouette contrast." },
        { name: "Brushed Bronze", type: "texture", icon: "fa-medal", desc: "Warm metallic bronze plating with subtle directional polish." },
        { name: "Tactical Chrome", type: "texture", icon: "fa-car-battery", desc: "Clean geometric chrome layout optimized for fast reading." },
        { name: "Dark Ironplate", type: "texture", icon: "fa-layer-group", desc: "Riveted industrial plate aesthetic with crisp square edges." },
        { name: "Monolith Steel", type: "texture", icon: "fa-square", desc: "Minimalist industrial steel grid with zero distraction." },

        // Natural Boards (10)
        { name: "Walnut & Maple", type: "natural", icon: "fa-tree", desc: "Classic tournament timber pairing with natural grain warmth." },
        { name: "Granite & Quartz", type: "natural", icon: "fa-mountain", desc: "Polished stone board providing robust organic stability." },
        { name: "Dark Oak & Birch", type: "natural", icon: "fa-seedling", desc: "Traditional strategy board crafted in deep natural woods." },
        { name: "Basalt & Limestone", type: "natural", icon: "fa-mountain-sun", desc: "Contrasting volcanic stone tiles for tactile immersion." },
        { name: "Earthy Sandstone", type: "natural", icon: "fa-sun", desc: "Warm stone strata board offering exceptional visual comfort." },
        { name: "Aged Mahogany", type: "natural", icon: "fa-leaf", desc: "Rich reddish-brown timber board with grandmaster prestige." },
        { name: "Riverbed Slate", type: "natural", icon: "fa-water", desc: "Smooth aquatic stone grid with natural matte diffusion." },
        { name: "Compressed Clay", type: "natural", icon: "fa-globe", desc: "Earthy tile board with distinct tactile boundaries." },
        { name: "Deep Pine Timber", type: "natural", icon: "fa-tree", desc: "Subdued wood grain board engineered for long tactical matches." },
        { name: "Raw Obsidian Rock", type: "natural", icon: "fa-fire", desc: "Natural volcanic glass and stone contrast matrix." }
    ];

    function renderBoards(filter = 'all') {
        boardGallery.innerHTML = '';
        boardData
            .filter(item => filter === 'all' || item.type === filter)
            .forEach(board => {
                const card = document.createElement('div');
                card.className = 'board-card';
                card.innerHTML = `
                    <div class="card-preview-box" style="background: var(--bg-primary);">
                        <i class="fa-solid ${board.icon}"></i>
                    </div>
                    <div class="card-info">
                        <h4>${board.name}</h4>
                        <p>${board.desc}</p>
                        <span class="badge-type">${board.type.toUpperCase()}</span>
                    </div>
                `;
                boardGallery.appendChild(card);
            });
    }
    renderBoards();

    // Board filter buttons
    const boardFilterBtns = document.querySelectorAll('#boards .filter-btn');
    boardFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            boardFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderBoards(btn.getAttribute('data-filter-board'));
        });
    });

    // 5. DEFAULT PAIRING BUTTON ACTION
    const applyDefaultPairingBtn = document.getElementById('applyDefaultPairing');
    if(applyDefaultPairingBtn) {
        applyDefaultPairingBtn.addEventListener('click', () => {
            alert('Default Pairing (Brushed Steel + Onyx & Titanium) successfully applied to your tactical profile!');
        });
    }

    // 6. LIVE CHESS/STRATEGY BOARD SIMULATOR INTERACTION
    const chessGrid = document.getElementById('chessGrid');
    const moveHistory = document.getElementById('moveHistory');
    const resetBoardBtn = document.getElementById('resetBoardBtn');

    const initialPieces = [
        ['♜','♞','♝','♛','♚','♝','♞','♜'],
        ['♟','♟','♟','♟','♟','♟','♟','♟'],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','♙','','','',''],
        ['','','','','','','',''],
        ['♙','♙','♙','','♙','♙','♙','♙'],
        ['♖','♘','♗','♕','♔','♗','♘','♖']
    ];

    let boardState = JSON.parse(JSON.stringify(initialPieces));
    let selectedCell = null;

    function renderChessBoard() {
        chessGrid.innerHTML = '';
        for(let r=0; r<8; r++) {
            for(let c=0; c<8; c++) {
                const cell = document.createElement('div');
                const isDark = (r + c) % 2 === 1;
                cell.className = `chess-cell ${isDark ? 'dark' : 'light'}`;
                cell.dataset.row = r;
                cell.dataset.col = c;

                if(selectedCell && selectedCell.row === r && selectedCell.col === c) {
                    cell.classList.add('selected');
                }

                if(selectedCell && ((r === selectedCell.row - 1 && c === selectedCell.col) || (r === selectedCell.row - 2 && c === selectedCell.col))) {
                    cell.classList.add('valid-move');
                }

                const piece = boardState[r][c];
                if(piece) {
                    cell.textContent = piece;
                }

                cell.addEventListener('click', () => handleCellClick(r, c));
                chessGrid.appendChild(cell);
            }
        }
    }

    function handleCellClick(r, c) {
        if(selectedCell && selectedCell.row === r && selectedCell.col === c) {
            selectedCell = null;
            addLogEntry('Deselected unit.');
        } else if(selectedCell && (r === selectedCell.row - 1 && c === selectedCell.col || r === selectedCell.row - 2 && c === selectedCell.col)) {
            boardState[r][c] = boardState[selectedCell.row][selectedCell.col];
            boardState[selectedCell.row][selectedCell.col] = '';
            addLogEntry(`Moved unit from (${selectedCell.row},${selectedCell.col}) to (${r},${c}) - Tactical advantage secured.`);
            selectedCell = null;
        } else {
            if(boardState[r][c]) {
                selectedCell = { row: r, col: c };
                addLogEntry(`Selected unit [${boardState[r][c]}] at coordinate (${r},${c}). Valid moves highlighted.`);
            } else {
                selectedCell = null;
                addLogEntry(`Selected empty terrain coordinate (${r},${c}).`);
            }
        }
        renderChessBoard();
    }

    function addLogEntry(text) {
        const entry = document.createElement('div');
        entry.className = 'log-entry';
        const timeCount = moveHistory.children.length + 1;
        entry.innerHTML = `<span>${timeCount}.</span> ${text}`;
        moveHistory.appendChild(entry);
        moveHistory.scrollTop = moveHistory.scrollHeight;
    }

    if(resetBoardBtn) {
        resetBoardBtn.addEventListener('click', () => {
            boardState = JSON.parse(JSON.stringify(initialPieces));
            selectedCell = null;
            moveHistory.innerHTML = '<div class="log-entry highlight-log"><span>1.</span> Board simulation reset. Select any piece.</div>';
            renderChessBoard();
        });
    }

    renderChessBoard();
});