/**
 * Le service chargé de faire les échanges avec le serveur. Dépend du service $http fourni
 * par angularjs.
 */
tdcApp.factory('tdcService', function($http, $location){

    return {
        getFiliere: function(){
            return $http.get("/edunbds/n/filieres/smog" + $location.path() + ".json")
                .then(function(result){
                    return result.data;
                })
        },
        setCorrespondance: function (filiere){
            return $http.post("/edunbds/n/filieres/smog" + $location.path() + "/modify", filiere)
                .then(function(result){
                    return result.data;
                })
        },
        getFormations: function (){
            return $http.get("/edunbds/n/filieres/smog/formations")
                .then(function(result){
                    return result.data;
                })
        },
        getProfils: function (){
            return $http.get("/edunbds/n/filieres/smog/profils")
                .then(function(result){
                    return result.data;
                })
        },
        getDiplomes: function (){
            return $http.get("/edunbds/n/filieres/smog/diplomes")
                .then(function(result){
                    return result.data;
                })
        }

    };

});



