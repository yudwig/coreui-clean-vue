export class NavLink {
    private links = [
        {
            name: 'Dashboard',
            url:  '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'primary',
            }
        },
        {
            name: 'Items',
            url:  '/items',
            icon: 'icon-list',
        },
        {
            name: 'Todo',
            url:  '/todo',
            icon: 'icon-note',
        },
    ];
    get items() {
        return this.links;
    }
}