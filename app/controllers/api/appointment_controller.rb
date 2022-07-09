class Api::AppointmentController < ApplicationController
  before_action :set_doctor
  before_action :set_appointment, only: [:show, :update, :destroy]
  
  def index
    render json: doctor.appointments
  end

  def show
    render json: @appointment
  end

  def appointmentedUsers
    render json: @doctor.users 
  end

  def unappointmentedUsers
    @users = User.all - @doctor.users
    render json: @users
  end

  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
  
    end
  end

  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: { errors: @appointment.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @appointment.destroy
    render json: { message: 'appointment deleted' }
  end


private
  def appointment_params
    params.require(:appointment).permit(:adate, :atime, :user, :note)
  end

  def set_doctor
    @doctor = Doctor.find(params[:doctor_id])
  end

  def set_appointment
    @appointment = @doctor.appointments.find(params[:id])
  end

end