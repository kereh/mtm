import { IMessage } from "@/types"

export function generateMessage({ course, customer, phone, address }: IMessage) {
  const text = `Hello LPK Aurora, I'am\n\nName: ${customer}\nAddress: ${address}\nPhone: ${phone}\n\nI hope this message finds you well. I'm excited to express my interest in enrolling in your ${course} that I've heard so many great things about. I've done my research and am convinced that your expertise will provide me with the knowledge and skills I'm eager to acquire.\n\nCould you please guide me through the enrollment process and provide me with any necessary details? I'm looking forward to embarking on this learning journey and am ready to take the next steps.\n\nThank you for your time and assistance. I'm eagerly awaiting your response.\n\nBest regards,\n${customer}`

  return encodeURI(text)
}