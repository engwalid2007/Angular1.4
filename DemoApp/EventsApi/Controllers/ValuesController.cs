using EventsApi.Models;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Script.Serialization;

namespace EventsApi.Controllers
{
    [EnableCors("*", "*", "*")]
    public class EventController : ApiController
    {
        // GET api/values

        public static List<Event> ev;
        string json = "{\"name\": \"Angular Boot Camp\","
            + "\"id\": 1,"
            + "\"date\": \"1/1/2013\","
            + "\"time\": \"10:30 am\","
            + "\"location\": {"
            + "    \"address\": \"Google Headquarters\","
            + "    \"city\": \"Mountain View\","
            + "    \"province\": \"CA\""
            + "},"
            + "\"imageUrl\": \"http://pascalprecht.github.com/slides/angularjs-insights/img/angularjs-logo.png\","
            + "\"sessions\": ["
            + "    {"
            + "		\"id\": 1,"
            + "        \"name\": \"Directives Masterclass\","
            + "        \"creatorName\": \"Bob Smith\","
            + "        \"duration\": 1,"
            + "        \"level\": \"Advanced\","
            + "        \"abstract\": \"In this session you will learn the ins and outs of directives!\","
            + "        \"upVoteCount\": 0"
            + "    },"
            + "    {"
            + "		\"id\": 2,"
            + "        \"name\": \"Scopes for fun and profit\","
            + "        \"creatorName\": \"John Doe\","
            + "        \"duration\": 3,"
            + "        \"level\": \"Introductory\","
            + "        \"abstract\": \"This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.\","
            + "        \"upVoteCount\": 0"
            + "    },"
            + "    {"
            + "		\"id\": 3,"
            + "        \"name\": \"Well Behaved Controllers\","
            + "        \"creatorName\": \"Jane Doe\","
            + "        \"duration\": 2,"
            + "        \"level\": \"Intermediate\","
            + "        \"abstract\": \"Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.\","
            + "        \"upVoteCount\": 0"
            + "    }"
            + "]"
        + "}";
        public EventController()
        {
            if (ev == null)
            {
                ev = new List<Event>();
                JavaScriptSerializer json_serializer = new JavaScriptSerializer();
                //object c = json_serializer.DeserializeObject(json);
                ev.Add(json_serializer.Deserialize<Event>(json));
            }
        }
        public HttpResponseMessage Get(string id = null)
        {
            if (string.IsNullOrEmpty(id))
                return Request.CreateResponse(HttpStatusCode.OK, ev);
            else if (!string.IsNullOrEmpty(id))
            {
               
                if (ev.Any(c => c.Id == id))
                    return Request.CreateResponse(HttpStatusCode.OK, ev.FirstOrDefault(c => c.Id == id));
                else
                    return Request.CreateResponse(HttpStatusCode.NotFound);


            }
            else
                return Request.CreateResponse(HttpStatusCode.NotFound);
        }
        public void Post([FromBody]Event eventData)
        {
            int id = int.Parse(ev.Max(c => c.Id));
            eventData.Id = (id+1).ToString();
            ev.Add(eventData);
        }
        [HttpPost]
        public void SaveData()
        {

        }
    }
}
