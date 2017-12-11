// Code goes here
var app = angular.module("app", ['ngAnimate']);

 app.controller("MyCtrl", function($scope, $http){
// 	$http.get("scripts/php/winter_league_scores.php").then(
// 		function(response){
// 			$scope.teams = response.data;
// 		}
// 	);
  
  $scope.teams = [
    {
      "name": "Liverpool",
      "score": 132,
      "weeks": [
        {
          "weekNumber": "2",
          "score": 67,
          "individualScores": [
            {
              "playerName": "Brian Smithers",
              "weekHandicap": "0",
              "individualScore": "34"
            },
            {
              "playerName": "Owen Doyle",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Aiden McCormack",
              "weekHandicap": "0",
              "individualScore": "26"
            },
            {
              "playerName": "Kevin Halpin",
              "weekHandicap": "0",
              "individualScore": "22"
            }
          ]
        },
        {
          "weekNumber": "3",
          "score": 65,
          "individualScores": [
            {
              "playerName": "Kevin Halpin",
              "weekHandicap": "0",
              "individualScore": "35"
            },
            {
              "playerName": "Aiden McCormack",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Owen Doyle",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Brian Smithers",
              "weekHandicap": "0",
              "individualScore": "26"
            }
          ]
        },
        {
          "weekNumber": "1",
          "score": 64,
          "individualScores": [
            {
              "playerName": "Aiden McCormack",
              "weekHandicap": "0",
              "individualScore": "37"
            },
            {
              "playerName": "Owen Doyle",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Kevin Halpin",
              "weekHandicap": "0",
              "individualScore": "25"
            },
            {
              "playerName": "Brian Smithers",
              "weekHandicap": "0",
              "individualScore": "24"
            }
          ]
        },
        {
          "weekNumber": "4",
          "score": 64,
          "individualScores": [
            {
              "playerName": "Brian Smithers",
              "weekHandicap": "0",
              "individualScore": "35"
            },
            {
              "playerName": "Kevin Halpin",
              "weekHandicap": "0",
              "individualScore": "29"
            },
            {
              "playerName": "Aiden McCormack",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Owen Doyle",
              "weekHandicap": "0",
              "individualScore": "28"
            }
          ]
        }
      ]
    },
    {
      "name": "Spurs",
      "score": 123,
      "weeks": [
        {
          "weekNumber": "2",
          "score": 65,
          "individualScores": [
            {
              "playerName": "Des McCormack",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Padraic Brennan",
              "weekHandicap": "0",
              "individualScore": "32"
            },
            {
              "playerName": "Colm Kelly",
              "weekHandicap": "0",
              "individualScore": "29"
            },
            {
              "playerName": "Alan Bergin",
              "weekHandicap": "0",
              "individualScore": "22"
            }
          ]
        },
        {
          "weekNumber": "1",
          "score": 58,
          "individualScores": [
            {
              "playerName": "Padraic Brennan",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Colm Kelly",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Alan Bergin",
              "weekHandicap": "0",
              "individualScore": "25"
            },
            {
              "playerName": "Des McCormack",
              "weekHandicap": "0",
              "individualScore": "25"
            }
          ]
        },
        {
          "weekNumber": "3",
          "score": 57,
          "individualScores": [
            {
              "playerName": "Des McCormack",
              "weekHandicap": "0",
              "individualScore": "29"
            },
            {
              "playerName": "Padraic Brennan",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Colm Kelly",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Alan Bergin",
              "weekHandicap": "0",
              "individualScore": "21"
            }
          ]
        },
        {
          "weekNumber": "4",
          "score": 57,
          "individualScores": [
            {
              "playerName": "Des McCormack",
              "weekHandicap": "0",
              "individualScore": "29"
            },
            {
              "playerName": "Alan Bergin",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Colm Kelly",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Padraic Brennan",
              "weekHandicap": "0",
              "individualScore": "25"
            }
          ]
        }
      ]
    },
    {
      "name": "Everton",
      "score": 134,
      "weeks": [
        {
          "weekNumber": "3",
          "score": 67,
          "individualScores": [
            {
              "playerName": "Eddie Finn",
              "weekHandicap": "0",
              "individualScore": "34"
            },
            {
              "playerName": "Alan O Conor",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Wayne Osborne",
              "weekHandicap": "0",
              "individualScore": "29"
            },
            {
              "playerName": "Liam Lynch",
              "weekHandicap": "0",
              "individualScore": "20"
            }
          ]
        },
        {
          "weekNumber": "2",
          "score": 67,
          "individualScores": [
            {
              "playerName": "Eddie Finn",
              "weekHandicap": "0",
              "individualScore": "34"
            },
            {
              "playerName": "Liam Lynch",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Wayne Osborne",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Alan O Conor",
              "weekHandicap": "0",
              "individualScore": "29"
            }
          ]
        },
        {
          "weekNumber": "1",
          "score": 65,
          "individualScores": [
            {
              "playerName": "Liam Lynch",
              "weekHandicap": "0",
              "individualScore": "37"
            },
            {
              "playerName": "Wayne Osborne",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Alan O Conor",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Eddie Finn",
              "weekHandicap": "0",
              "individualScore": "24"
            }
          ]
        },
        {
          "weekNumber": "4",
          "score": 54,
          "individualScores": [
            {
              "playerName": "Liam Lynch",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Wayne Osborne",
              "weekHandicap": "0",
              "individualScore": "26"
            },
            {
              "playerName": "Eddie Finn",
              "weekHandicap": "0",
              "individualScore": "25"
            }
          ]
        }
      ]
    },
    {
      "name": "Chelsea",
      "score": 134,
      "weeks": [
        {
          "weekNumber": "3",
          "score": 70,
          "individualScores": [
            {
              "playerName": "Dave Heary",
              "weekHandicap": "0",
              "individualScore": "38"
            },
            {
              "playerName": "Martin Doyle",
              "weekHandicap": "0",
              "individualScore": "32"
            },
            {
              "playerName": "Dave Bergin Jnr",
              "weekHandicap": "0",
              "individualScore": "23"
            },
            {
              "playerName": "Marty Crawford",
              "weekHandicap": "0",
              "individualScore": "22"
            }
          ]
        },
        {
          "weekNumber": "2",
          "score": 64,
          "individualScores": [
            {
              "playerName": "Dave Heary",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Dave Bergin Jnr",
              "weekHandicap": "0",
              "individualScore": "31"
            },
            {
              "playerName": "Martin Doyle",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Marty Crawford",
              "weekHandicap": "0",
              "individualScore": "30"
            }
          ]
        },
        {
          "weekNumber": "1",
          "score": 62,
          "individualScores": [
            {
              "playerName": "Marty Crawford",
              "weekHandicap": "0",
              "individualScore": "32"
            },
            {
              "playerName": "Dave Bergin Jnr",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Martin Doyle",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Dave Heary",
              "weekHandicap": "0",
              "individualScore": "22"
            }
          ]
        },
        {
          "weekNumber": "4",
          "score": 58,
          "individualScores": [
            {
              "playerName": "Marty Crawford",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Martin Doyle",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Dave Heary",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Dave Bergin Jnr",
              "weekHandicap": "0",
              "individualScore": "25"
            }
          ]
        }
      ]
    },
    {
      "name": "Man Utd",
      "score": 135,
      "weeks": [
        {
          "weekNumber": "4",
          "score": 68,
          "individualScores": [
            {
              "playerName": "George Coombes",
              "weekHandicap": "0",
              "individualScore": "38"
            },
            {
              "playerName": "Ivan Cosgrave",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "MJ Fetherston",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Jonathan Doyle",
              "weekHandicap": "0",
              "individualScore": "24"
            }
          ]
        },
        {
          "weekNumber": "3",
          "score": 67,
          "individualScores": [
            {
              "playerName": "Ivan Cosgrave",
              "weekHandicap": "0",
              "individualScore": "37"
            },
            {
              "playerName": "Jonathan Doyle",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "MJ Fetherston",
              "weekHandicap": "0",
              "individualScore": "29"
            },
            {
              "playerName": "George Coombes",
              "weekHandicap": "0",
              "individualScore": "20"
            }
          ]
        },
        {
          "weekNumber": "2",
          "score": 62,
          "individualScores": [
            {
              "playerName": "George Coombes",
              "weekHandicap": "0",
              "individualScore": "32"
            },
            {
              "playerName": "MJ Fetherston",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Jonathan Doyle",
              "weekHandicap": "0",
              "individualScore": "23"
            },
            {
              "playerName": "Ivan Cosgrave",
              "weekHandicap": "0",
              "individualScore": "18"
            }
          ]
        },
        {
          "weekNumber": "1",
          "score": 60,
          "individualScores": [
            {
              "playerName": "Ivan Cosgrave",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "MJ Fetherston",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Jonathan Doyle",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "George Coombes",
              "weekHandicap": "0",
              "individualScore": "22"
            }
          ]
        }
      ]
    },
    {
      "name": "Arsenal",
      "score": 130,
      "weeks": [
        {
          "weekNumber": "2",
          "score": 69,
          "individualScores": [
            {
              "playerName": "Richie O Brian",
              "weekHandicap": "0",
              "individualScore": "36"
            },
            {
              "playerName": "Jimmy Murphy",
              "weekHandicap": "0",
              "individualScore": "33"
            },
            {
              "playerName": "Kieran Fitzmaurice",
              "weekHandicap": "0",
              "individualScore": "31"
            },
            {
              "playerName": "Mick Fetherston",
              "weekHandicap": "0",
              "individualScore": "29"
            }
          ]
        },
        {
          "weekNumber": "3",
          "score": 61,
          "individualScores": [
            {
              "playerName": "Kieran Fitzmaurice",
              "weekHandicap": "0",
              "individualScore": "31"
            },
            {
              "playerName": "Jimmy Murphy",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Mick Fetherston",
              "weekHandicap": "0",
              "individualScore": "26"
            },
            {
              "playerName": "Richie O Brian",
              "weekHandicap": "0",
              "individualScore": "25"
            }
          ]
        },
        {
          "weekNumber": "4",
          "score": 58,
          "individualScores": [
            {
              "playerName": "Kieran Fitzmaurice",
              "weekHandicap": "0",
              "individualScore": "30"
            },
            {
              "playerName": "Jimmy Murphy",
              "weekHandicap": "0",
              "individualScore": "28"
            },
            {
              "playerName": "Richie O Brian",
              "weekHandicap": "0",
              "individualScore": "28"
            }
          ]
        },
        {
          "weekNumber": "1",
          "score": 54,
          "individualScores": [
            {
              "playerName": "Jimmy Murphy",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Kieran Fitzmaurice",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Mick Fetherston",
              "weekHandicap": "0",
              "individualScore": "27"
            },
            {
              "playerName": "Richie O Brian",
              "weekHandicap": "0",
              "individualScore": "26"
            }
          ]
        }
      ]
    }
  ];
  
  $scope.show = true;
  $scope.test = "world";
    $scope.weekShown = -1;
    $scope.teamShown = -1;

    if (window.matchMedia('screen and (max-width: 500px)').matches) {
      $scope.showTable = false;  
    }
    else{
      $scope.showTable = true;
    }
  
    $scope.showDescription = function(){
      $scope.showTable = !($scope.showTable);
    }

    $scope.setWeekShown = function(weekIndex){
      $scope.weekShown = weekIndex;
    }
    
    $scope.setTeamShown = function(teamIndex){
      $scope.teamShown = teamIndex;
    }
  
    $scope.teamRowClicked = function(index){
      if($scope.teamShown == index){
        $scope.setWeekShown(-1);
        $scope.setTeamShown(-1);
      }
      else{
        $scope.setTeamShown(index);
        $scope.setWeekShown(-1);
      }
    }
    
    $scope.weekRowClicked = function(index){
      if($scope.weekShown == index){
        $scope.setWeekShown(-1);
      }
      else{
        $scope.setWeekShown(index);
      }
    }
    
    $scope.even = function(num){
      return (num % 2) === 0;
    }
});
