//
class Car{
    constructor(make,model,year,isAvailable){
      
        Car.make=make
        Car.model=model
        Car.year=year
        Car.isAvailable=isAvailable

    }
  toggleActivity(){
    this.isAvailable =!this.isAvailable
    console.log(this.isAvailable)
}
}
let car1=new Car("Toyota","Camry",2020,`False`)
car1.toggleActivity()


class Rental{
    constructor(car,rentalName,rentalStartDate,rentalEndDate){
        this.car=Car
        this.rentalName=rentalName
        this.rentalStartDate=rentalStartDate
        this.rentalEndDate=rentalEndDate
    }
    rentalCarDuration(){
        let hireduration=Math.round(Math.abs(this.rentalEndDate-this.rentalStartDate))/(1000
            *60*60*24)
            console.log(hireduration)
    }
}
let carhire=new Rental("subaru","loice mwau",new Date('11/12/2020'),new Date('1/4/2023'))
console.log(carhire)
carhire.rentalCarDuration()
//
class Question{
    constructor(text,options,correctAnswer){
        this.text=text
        this.options=options
        this.correctAnswer=correctAnswer
    }
    checkAnswer(userAnswer){
        return userAnswer===this.correctAnswer
    }
}
let question=new Question("Name one arm of government",["Judiciary","High court","County"],"Judiciary")
let userAnswer="Kisumu"
let isCorrect=question.checkAnswer(userAnswer)
console.log(isCorrect);
//
class Quiz{
constructor (){
    this.questions=[]
    this.currentQuestionIndex=0
    this.score=0
}
addQuestion(question){
this.questions.push(question)

}
nextQuestion(){
    this.currentQuestionIndex++
}
submitAnswer(userAnswer){
    let currentQuestion=this.questions[this.currentQuestionIndex]
    if(currentQuestion.checkAnswer(userAnswer)){
        this.score++
    }
}
}
let quiz1=new Quiz()
let question1=new Question("Who is the president of Kenya",["Uhuru","Ruto","Rigathi"],"Ruto")
let question2=new Question("Which county in Kenya is code 001",["Nairobi","Mombasa","Machakos"],"Mombasa")
quiz1.addQuestion(question1)
quiz1.addQuestion(question2)
quiz1.submitAnswer("rigathi")
quiz1.nextQuestion()
quiz1.submitAnswer("kisumu")
console.log(quiz1.score);
