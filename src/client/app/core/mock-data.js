/* jshint -W079 */
var mockData = (function() {
    return {
        getMockUsers: getMockUsers,
        getMockStates: getMockStates,
        getMockBills: getMockBills
    };

    function getMockStates() {
        return [
            {
                state: 'dashboard',
                config: {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html',
                    title: 'dashboard',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
                }
            }
        ];
    }

    function getMockUsers() {
        return [
{id:1,firstName:'Arnaud',lastName:'Vromman',selected:true},
{id:2,firstName:'Yulia' ,lastName:'Firsova',selected:true},
{id:3,firstName:'Arnaud',lastName:'Ghysens',selected:true},
{id:4,firstName:'Jean'  ,lastName:'Lebeau' ,selected:true}
        ];
    }
    function getMockBills() {
        return [
            {title: 'First bill', amount: 15,
             createdBy:1,created:'2015-09-07T22:13:45.445Z',
             splitWith:[]}
        ];
    }
})();
