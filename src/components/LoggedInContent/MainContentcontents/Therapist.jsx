import React from "react";

const Therapist = () => {
  const data = [
    {
      id: "1",
      tag: "Anxeity Lifstyle",
      name: "ADI BIST",
      qualification: "MA",
      rating: 3.54,
      price: 300,
      email: "ismkve@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/52ff5161-747b-4bdf-b846-c6f61c11fba8.png",
    },
    {
      id: "2",
      tag: "Trauma Relationship",
      name: "SANJANA BHADANI",
      qualification: "MSc",
      rating: 4.66,
      price: 500,
      email: "sb@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/9e4357f0-1bad-4954-a2a8-65beb36bfa92.png",
    },
    {
      id: "3",
      tag: "Identity Developmental Concerns",
      name: "YAMINI PUNJ",
      qualification: "MA and BA",
      rating: 2.83,
      price: 300,
      email: "yp@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/0ae0ca2f-f2dc-4ede-9345-995072a5cc2a.png",
    },
    {
      id: "4",
      tag: "Overall Wellbeing Professional Concerns",
      name: "SAHITHI MANNAR",
      qualification: "MA",
      rating: 5,
      price: 450,
      email: "sm@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/10591723-3781-49c7-809f-a300ce25af60.png",
    },
    {
      id: "5",
      tag: "Relationships Trauma",
      name: "EHSAAS MEHTA",
      qualification: "MA",
      rating: 4.33,
      price: 350,
      email: "em@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/e489a298-665c-44cb-bcd1-3f51da44fe1e.png",
    },
    {
      id: "6",
      tag: "Identity Developmental Concerns",
      name: "JANAKI NAGARAJA",
      qualification: "MSc and BA",
      rating: 4.83,
      price: 300,
      email: "jn@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/dccb99ab-1b6e-4796-b40d-b54e433e922b.png",
    },
    {
      id: "7",
      tag: "Anxiety Overall Wellbeing",
      name: "DARSHANA DIXIT",
      qualification: "MSc",
      rating: 4.37,
      price: 400,
      email: "dd@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/03a9800c-0f3f-4ec6-8ecc-9c790dbfac67.png",
    },
    {
      id: "8",
      tag: "Trauma Identity",
      name: "PUSHTI GOSALIA",
      qualification: "MA and BA",
      rating: 4.5,
      price: 500,
      email: "pg@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/28a5d485-cd55-4a8f-af3f-aaff7ad30f37.png",
    },
    {
      id: "9",
      tag: "Developmental Concerns Lifestyle",
      name: "JASAR KHAN",
      qualification: "MA ,M.Phil and BA",
      rating: 4.66,
      price: 300,
      email: "jk@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/8387cce2-5f0d-44a7-9f5a-ee59b652cc65.png",
    },
    {
      id: "10",
      tag: "Trauma Professional Concerns",
      name: "SAFAL SRIVASTAVA",
      qualification: "MA",
      rating: 4.58,
      price: 450,
      email: "ss@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/6acec9a1-fbcb-45f4-8192-18f5d5ad5a01.png",
    },
    {
      id: "11",
      tag: "Trauma",
      name: "NANDINI BANERJEE",
      qualification: "MSc",
      rating: 4.59,
      price: 500,
      email: "nb@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/f6cf61cd-b098-47c7-a950-a89c6d97b1f0.png",
    },
    {
      id: "12",
      tag: "Lifestyle Developmental Concerns",
      name: "ANUKRITI GOYAL",
      qualification: "MA and BA",
      rating: 3.85,
      price: 400,
      email: "ag1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/59ae73df-a102-4c79-bfb5-1da73845f3f5.png",
    },
    {
      id: "13",
      tag: "Identity Anxiety",
      name: "Jharika Zaveri",
      qualification: "MA and BA",
      rating: 4.11,
      price: 300,
      email: "sm1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/30846123-ae00-4dc0-b0ff-40d9e75950c7.png",
    },
    {
      id: "14",
      tag: "Relationships Lifestyle",
      name: "JASPRIT KAUR",
      qualification: "MSc",
      rating: 3.89,
      price: 450,
      email: "jk1@gmail.com",
      src:
        "https://cdn.mindpeers.co/users/profile/d71fd2f2-8ed1-4f45-aa1d-62c7e636242d.png",
    },
  ];

  return (
    <div>
      <div className="bg-gray-200 flex flex-wrap">
        {data.map((n, i) => {
          return (
            <div className="bg-white p-3 m-5 rounded-xl w-[480px]">
              <div className="flex flex-row justify-between">
                <div>
                  <div className="font-bold mb-2">{n.name}</div>
                  <div className="text-sm">{n.rating} star</div>
                  <div className="text-sm">
                    Qualification: {n.qualification}
                  </div>
                  <div className="text-sm">Expertise: Doing Nothing</div>
                  <div className="text-sm font-bold mb-5">
                    Consultation fee: Rs {n.price}
                  </div>
                </div>
                <img
                  className="object-contain w-[100px]"
                  alt="pp"
                  src={n.src}
                />
              </div>
              <div></div>
              <button className="text-white w-full hover:bg-purple-700 transition ease-in bg-purple-600 font-semibold p-2 rounded-lg">
                BOOK NOW
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Therapist;
