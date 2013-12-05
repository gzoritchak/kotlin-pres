package humantalks

import org.springframework.stereotype.Controller
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

Controller
public class HumanController() {

    Autowired var humanRepo:HumanRepo? = null

    RequestMapping(value=array("/"))
    ResponseBody
    fun listHumans()= humanRepo!!
            .listHumans()
            .filter { it.age < 60 }
            .sortBy { it.age }
            .reverse()

}
