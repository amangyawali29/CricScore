fetch("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php?completedlimit=5&inprogresslimit=5&upcomingLimit=5", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
		"x-rapidapi-key": "a47e29ce80mshf6a4fea42339f37p12c725jsne50ee7a8c6bb"
	}
}).then(resp=>resp.json()).then(res=>{
    console.log(res);
    var series1 = res.matchList.matches[0].series.shortName;
    var series2 = res.matchList.matches[1].series.shortName;
    var series3 = res.matchList.matches[2].series.shortName;
    var series4 = res.matchList.matches[3].series.shortName;
    var series5 = res.matchList.matches[4].series.shortName;
    var series6 = res.matchList.matches[5].series.shortName;
    var series7 = res.matchList.matches[6].series.shortName;

    var match_number1 = res.matchList.matches[0].name;
    var match_number2 = res.matchList.matches[1].name;
    var match_number3 = res.matchList.matches[2].name;
    var match_number4 = res.matchList.matches[3].name;
    var match_number5 = res.matchList.matches[4].name;
    var match_number6 = res.matchList.matches[5].name;
    var match_number7 = res.matchList.matches[6].name;

    var venue1 = res.matchList.matches[0].venue.name;
    var venue2 = res.matchList.matches[1].venue.name;
    var venue3 = res.matchList.matches[2].venue.name;
    var venue4 = res.matchList.matches[3].venue.name;
    var venue5 = res.matchList.matches[4].venue.name;
    var venue6 = res.matchList.matches[5].venue.name;
    var venue7 = res.matchList.matches[6].venue.name;

    for (var i=0; i<7; i+=1){
        var match_status = res.matchList.matches[i].status;
        if (match_status == "UPCOMING"){
            document.getElementById(`sc${i+1}`).style.display="none";
        }
    }
    
    var home_team1 = res.matchList.matches[0].homeTeam.name;
    var away_team1 = res.matchList.matches[0].awayTeam.name;
    document.getElementById("home_team1").innerText=home_team1;
    document.getElementById("away_team1").innerText=away_team1;
    document.getElementById("series_name1").innerText=series1;
    document.getElementById("match_number1").innerText=match_number1;
    document.getElementById("match_number1").innerText += " -"+venue1;
    var matchSummaryText1 = res.matchList.matches[0].matchSummaryText;
    var status1 = res.matchList.matches[0].status;
    document.getElementById("match_summary1").innerText=status1;
    document.getElementById("match_summary1").innerText+=" - "+matchSummaryText1;

    var home_team2 = res.matchList.matches[1].homeTeam.name;
    var away_team2 = res.matchList.matches[1].awayTeam.name;
    document.getElementById("home_team2").innerText=home_team2;
    document.getElementById("away_team2").innerText=away_team2;
    document.getElementById("series_name2").innerText=series2;
    document.getElementById("match_number2").innerText=match_number2;
    document.getElementById("match_number2").innerText += " -"+venue2;
    var matchSummaryText2 = res.matchList.matches[1].matchSummaryText;
    var status2 = res.matchList.matches[1].status;
    document.getElementById("match_summary2").innerText=status2;
    document.getElementById("match_summary2").innerText+=" - "+matchSummaryText2;

    var home_team3 = res.matchList.matches[2].homeTeam.name;
    var away_team3 = res.matchList.matches[2].awayTeam.name;
    document.getElementById("home_team3").innerText=home_team3;
    document.getElementById("away_team3").innerText=away_team3;
    document.getElementById("series_name3").innerText=series3;
    document.getElementById("match_number3").innerText=match_number3;
    document.getElementById("match_number3").innerText += " -"+venue3;
    var matchSummaryText3 = res.matchList.matches[2].matchSummaryText;
    var status3 = res.matchList.matches[2].status;
    document.getElementById("match_summary3").innerText=status3;
    document.getElementById("match_summary3").innerText+=" - "+matchSummaryText3;

    var home_team4 = res.matchList.matches[3].homeTeam.name;
    var away_team4 = res.matchList.matches[3].awayTeam.name;
    document.getElementById("home_team4").innerText=home_team4;
    document.getElementById("away_team4").innerText=away_team4;
    document.getElementById("series_name4").innerText=series4;
    document.getElementById("match_number4").innerText=match_number4;
    document.getElementById("match_number4").innerText += " -"+venue4;
    var matchSummaryText4 = res.matchList.matches[3].matchSummaryText;
    var status4 = res.matchList.matches[3].status;
    document.getElementById("match_summary4").innerText=status4;
    document.getElementById("match_summary4").innerText+=" - "+matchSummaryText4;

    var home_team5 = res.matchList.matches[4].homeTeam.name;
    var away_team5 = res.matchList.matches[4].awayTeam.name;
    document.getElementById("home_team5").innerText=home_team5;
    document.getElementById("away_team5").innerText=away_team5;
    document.getElementById("series_name5").innerText=series5;
    document.getElementById("match_number5").innerText=match_number5;
    document.getElementById("match_number5").innerText += " -"+venue5;
    var matchSummaryText5 = res.matchList.matches[4].matchSummaryText;
    var status5 = res.matchList.matches[4].status;
    document.getElementById("match_summary5").innerText=status5;
    document.getElementById("match_summary5").innerText+=" - "+matchSummaryText5;

    var home_team6 = res.matchList.matches[5].homeTeam.name;
    var away_team6 = res.matchList.matches[5].awayTeam.name;
    document.getElementById("home_team6").innerText=home_team6;
    document.getElementById("away_team6").innerText=away_team6;
    document.getElementById("series_name6").innerText=series6;
    document.getElementById("match_number6").innerText=match_number6;
    document.getElementById("match_number6").innerText += " -"+venue6;
    var matchSummaryText6 = res.matchList.matches[5].matchSummaryText;
    var status6 = res.matchList.matches[5].status;
    document.getElementById("match_summary6").innerText=status6;
    document.getElementById("match_summary6").innerText+=" - "+matchSummaryText6;

    var home_team7 = res.matchList.matches[6].homeTeam.name;
    var away_team7 = res.matchList.matches[6].awayTeam.name;
    document.getElementById("home_team7").innerText=home_team7;
    document.getElementById("away_team7").innerText=away_team7;
    document.getElementById("series_name7").innerText=series7;
    document.getElementById("match_number7").innerText=match_number7;
    document.getElementById("match_number7").innerText += " -"+venue7;
    var matchSummaryText7 = res.matchList.matches[6].matchSummaryText;
    var status7 = res.matchList.matches[6].status;
    document.getElementById("match_summary7").innerText=status7;
    document.getElementById("match_summary7").innerText+=" - "+matchSummaryText7;
    
    var homeover1 = res.matchList.matches[0].scores.homeOvers;
    var homescore1 = res.matchList.matches[0].scores.homeScore;
    var awayover1 = res.matchList.matches[0].scores.awayOvers;
    var awayscore1 = res.matchList.matches[0].scores.awayScore;
    document.getElementById("homescore1").innerText=homescore1;
    document.getElementById("homeover1").innerText=homeover1;
    document.getElementById("awayover1").innerText=awayover1;
    document.getElementById("awayscore1").innerText=awayscore1;

    var homeover2 = res.matchList.matches[1].scores.homeOvers;
    var homescore2 = res.matchList.matches[1].scores.homeScore;
    var awayover2 = res.matchList.matches[1].scores.awayOvers;
    var awayscore2 = res.matchList.matches[1].scores.awayScore;
    document.getElementById("homescore2").innerText=homescore2;
    document.getElementById("homeover2").innerText=homeover2;
    document.getElementById("awayover2").innerText=awayover2;
    document.getElementById("awayscore2").innerText=awayscore2;

    var homeover3 = res.matchList.matches[2].scores.homeOvers;
    var homescore3 = res.matchList.matches[2].scores.homeScore;
    var awayover3 = res.matchList.matches[2].scores.awayOvers;
    var awayscore3 = res.matchList.matches[2].scores.awayScore;
    document.getElementById("homescore3").innerText=homescore3;
    document.getElementById("homeover3").innerText=homeover3;
    document.getElementById("awayover3").innerText=awayover3;
    document.getElementById("awayscore3").innerText=awayscore3;

    var homeover4 = res.matchList.matches[3].scores.homeOvers;
    var homescore4 = res.matchList.matches[3].scores.homeScore;
    var awayover4 = res.matchList.matches[3].scores.awayOvers;
    var awayscore4 = res.matchList.matches[3].scores.awayScore;
    document.getElementById("homescore4").innerText=homescore4;
    document.getElementById("homeover4").innerText=homeover4;
    document.getElementById("awayover4").innerText=awayover4;
    document.getElementById("awayscore4").innerText=awayscore4;

    var homeover5 = res.matchList.matches[4].scores.homeOvers;
    var homescore5 = res.matchList.matches[4].scores.homeScore;
    var awayover5 = res.matchList.matches[4].scores.awayOvers;
    var awayscore5 = res.matchList.matches[4].scores.awayScore;
    document.getElementById("homescore5").innerText=homescore5;
    document.getElementById("homeover5").innerText=homeover5;
    document.getElementById("awayover5").innerText=awayover5;
    document.getElementById("awayscore5").innerText=awayscore5;

    var homeover6 = res.matchList.matches[5].scores.homeOvers;
    var homescore6 = res.matchList.matches[5].scores.homeScore;
    var awayover6 = res.matchList.matches[5].scores.awayOvers;
    var awayscore6 = res.matchList.matches[5].scores.awayScore;
    document.getElementById("homescore6").innerText=homescore6;
    document.getElementById("homeover6").innerText=homeover6;
    document.getElementById("awayover6").innerText=awayover6;
    document.getElementById("awayscore6").innerText=awayscore6;

    var homeover7 = res.matchList.matches[6].scores.homeOvers;
    var homescore7 = res.matchList.matches[6].scores.homeScore;
    var awayover7 = res.matchList.matches[6].scores.awayOvers;
    var awayscore7 = res.matchList.matches[6].scores.awayScore;
    document.getElementById("homescore7").innerText=homescore7;
    document.getElementById("homeover7").innerText=homeover7;
    document.getElementById("awayover7").innerText=awayover7;
    document.getElementById("awayscore7").innerText=awayscore7;

});




