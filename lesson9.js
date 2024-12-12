if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: 'Каталог товаров',
        hasChildren: true,
        items: [
            {
                name: 'Мойки',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran',
                        hasChildren: true,
                        items: [
                            {
                                name: 'Smth',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'Smth',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                    },
                    {
                        name: 'Handmade',
                        hasChildren: true,
                        items: [
                            {
                                name: 'Smth',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'Smth',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Vigro Glass',
                        hasChildren: false,
                        items: []
                    },
                ]
            },{
                name: 'Фильтры',
                hasChildren: true,
                items: [
                    {
                        name: 'Ulgran',
                        hasChildren: true,
                        items: [
                            {
                                name: 'Smth',
                                hasChildren: false,
                                items: []
                            },
                            {
                                name: 'Smth',
                                hasChildren: false,
                                items: []
                            }
                        ]
                    },
                    {
                        name: 'Vigro Mramor',
                        hasChildren: false,
                        items: []
                    }
                ]
            }
        ]
    }

    const items = new ListItems(document.getElementById('list_items'), data)

    items.render();
    items.init();

    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data_parent]')

            parents.forEach(parent => {
                const open = parent.querySelector('[data_open]')

                open.addEventListener('click', () => this.toggleItems(parent))
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.renderParent = function (data) {
            if (data.hasChildren) {
                let children = '';
                for (let i = 0; i < data.items.length; i++) {
                    const child = data.items[i];
                    children += this.renderParent(child);
                }
                return  `
                    <div class="list_item list_item_open" data_parent>
                        <div class="list_item_inner">
                            <img class="list_item_arrow" src="img/chevron-down.png" alt="chevron_down" data_open>
                            <img class="list_item_folder" src="img/folder.png" alt="folder">
                            <span>${data.name}</span>
                        </div>
                        <div class="list_item_items">
                            ${children}
                        </div>
                    </div>`
            }
            else {
                return  this.renderChildren(data)
            }
        }
        
        this.renderChildren = function (data) {
            return `
                <div class="list_item_inner list_item_child">
                    <img class="list_item_folder" src="img/folder.png" alt="folder">
                    <span>${data.name}</span>
                </div>`
        }
        
        this.toggleItems = function (parent) {
            parent.classList.toggle('list_item_open')
        }
    }
}