/* jshint -W117, -W030 */
describe('DashboardController', function() {
    var controller;
    var users = mockData.getMockUsers();

    beforeEach(function() {
        bard.appModule('app.dashboard');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    beforeEach(function () {
        controller = $controller('DashboardController',{dataservice: dataservice});
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Dashboard controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function () {
                expect(controller.title).to.equal('All expenses');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have bills', function () {
                expect(controller.bills).to.not.be.empty;
            });

            it('should have at least 1 person', function () {
                expect(controller.users).to.have.length.above(0);
            });

            it('should have people count of 4', function () {
                expect(controller.users).to.have.length(4);
            });
        });
    });
});
