USE [BookMyShow]
GO
/****** Object:  UserDefinedTableType [dbo].[CityState]    Script Date: 24-07-2023 17:25:44 ******/
CREATE TYPE [dbo].[CityState] AS TABLE(
	[city] [varchar](30) NULL,
	[state] [varchar](30) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[IdVal]    Script Date: 24-07-2023 17:25:44 ******/
CREATE TYPE [dbo].[IdVal] AS TABLE(
	[id] [int] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Pay]    Script Date: 24-07-2023 17:25:44 ******/
CREATE TYPE [dbo].[Pay] AS TABLE(
	[paytype] [varchar](30) NULL,
	[cust] [int] NULL,
	[total] [money] NULL,
	[cardn] [bigint] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Screen]    Script Date: 24-07-2023 17:25:44 ******/
CREATE TYPE [dbo].[Screen] AS TABLE(
	[sname] [varchar](30) NULL,
	[seatcount] [int] NULL,
	[typeid] [int] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Seat]    Script Date: 24-07-2023 17:25:44 ******/
CREATE TYPE [dbo].[Seat] AS TABLE(
	[seatname] [varchar](30) NULL,
	[seatcount] [int] NULL,
	[screenname] [varchar](30) NULL,
	[seattype] [int] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[TicketSeat]    Script Date: 24-07-2023 17:25:44 ******/
CREATE TYPE [dbo].[TicketSeat] AS TABLE(
	[seat] [int] NULL,
	[cost] [money] NULL
)
GO
/****** Object:  Table [dbo].[Booking]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[BookingId] [int] IDENTITY(1,1) NOT NULL,
	[ShowId] [int] NULL,
	[BookingCount] [int] NULL,
	[CustomerId] [int] NULL,
	[TotalCost] [money] NULL,
 CONSTRAINT [PK_Booking] PRIMARY KEY CLUSTERED 
(
	[BookingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[CityId] [int] IDENTITY(100,1) NOT NULL,
	[CityName] [varchar](30) NULL,
	[StateId] [int] NULL,
	[Pincode] [int] NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[CityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerId] [int] IDENTITY(1,1) NOT NULL,
	[CustomerName] [varchar](30) NULL,
	[Password] [varchar](30) NULL,
	[EmailId] [varchar](30) NULL,
	[Phone] [bigint] NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Genre]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[GenreId] [int] IDENTITY(1,1) NOT NULL,
	[GenreName] [varchar](30) NULL,
 CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED 
(
	[GenreId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Language]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Language](
	[LanguageId] [int] IDENTITY(1,1) NOT NULL,
	[LanguageName] [varchar](30) NULL,
 CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
(
	[LanguageId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[MovieId] [int] IDENTITY(1,1) NOT NULL,
	[MovieName] [varchar](max) NULL,
	[Description] [varchar](max) NULL,
	[Director] [varchar](max) NULL,
	[Duration] [time](7) NULL,
	[ReleaseDate] [datetime] NULL,
 CONSTRAINT [PK_Movie] PRIMARY KEY CLUSTERED 
(
	[MovieId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MovieGenre]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MovieGenre](
	[MovieGenreId] [int] IDENTITY(1,1) NOT NULL,
	[MovieId] [int] NULL,
	[GenreId] [int] NULL,
 CONSTRAINT [PK_MovieGenre] PRIMARY KEY CLUSTERED 
(
	[MovieGenreId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MovieLanguage]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MovieLanguage](
	[MovieLangId] [int] IDENTITY(1,1) NOT NULL,
	[MovieId] [int] NULL,
	[LanguageId] [int] NULL,
 CONSTRAINT [PK_MovieLanguage] PRIMARY KEY CLUSTERED 
(
	[MovieLangId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payment](
	[PaymentId] [int] IDENTITY(1,1) NOT NULL,
	[PaymentType] [varchar](30) NULL,
	[CustomerId] [int] NULL,
	[BookingId] [int] NULL,
	[TotalDue] [money] NULL,
	[CardNo] [bigint] NULL,
 CONSTRAINT [PK_Payment] PRIMARY KEY CLUSTERED 
(
	[PaymentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Screen]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Screen](
	[ScreenId] [int] IDENTITY(1,1) NOT NULL,
	[ScreenName] [varchar](max) NULL,
	[TheatreId] [int] NULL,
	[TotalSeatCount] [int] NULL,
	[ScreenTypeId] [int] NULL,
 CONSTRAINT [PK_Screen] PRIMARY KEY CLUSTERED 
(
	[ScreenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ScreenSeat]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ScreenSeat](
	[SeatId] [int] IDENTITY(1,1) NOT NULL,
	[SeatName] [varchar](10) NULL,
	[SeatTypeId] [int] NULL,
	[ScreenId] [int] NULL,
 CONSTRAINT [PK_ScreenSeat] PRIMARY KEY CLUSTERED 
(
	[SeatId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ScreenType]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ScreenType](
	[ScreenTypeId] [int] IDENTITY(1,1) NOT NULL,
	[ScreenTypeName] [varchar](30) NULL,
 CONSTRAINT [PK_ScreenType] PRIMARY KEY CLUSTERED 
(
	[ScreenTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SeatType]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SeatType](
	[SeatTypeId] [int] IDENTITY(1,1) NOT NULL,
	[SeatTypeName] [varchar](30) NULL,
	[SeatPrice] [money] NULL,
 CONSTRAINT [PK_SeatType] PRIMARY KEY CLUSTERED 
(
	[SeatTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Show]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Show](
	[ShowId] [int] IDENTITY(1,1) NOT NULL,
	[ShowDate] [date] NULL,
	[StartTime] [time](7) NULL,
	[EndTime] [time](7) NULL,
	[MovieId] [int] NULL,
	[ScreenId] [int] NULL,
	[MovieLangId] [int] NULL,
 CONSTRAINT [PK_Show] PRIMARY KEY CLUSTERED 
(
	[ShowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[State]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[State](
	[StateId] [int] IDENTITY(1,1) NOT NULL,
	[StateName] [varchar](30) NULL,
 CONSTRAINT [PK_State] PRIMARY KEY CLUSTERED 
(
	[StateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Theatre]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Theatre](
	[TheatreId] [int] IDENTITY(1,1) NOT NULL,
	[TheatreName] [varchar](max) NULL,
	[CityId] [int] NULL,
	[ScreenCount] [int] NULL,
 CONSTRAINT [PK_Theatre] PRIMARY KEY CLUSTERED 
(
	[TheatreId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TicketSeat]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TicketSeat](
	[TicketSeatId] [int] IDENTITY(1,1) NOT NULL,
	[SeatId] [int] NULL,
	[BookingId] [int] NULL,
	[UnitCost] [money] NULL,
 CONSTRAINT [PK_TicketSeat] PRIMARY KEY CLUSTERED 
(
	[TicketSeatId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([CustomerId])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Customer]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Show] FOREIGN KEY([ShowId])
REFERENCES [dbo].[Show] ([ShowId])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Show]
GO
ALTER TABLE [dbo].[City]  WITH CHECK ADD  CONSTRAINT [FK_City_State] FOREIGN KEY([StateId])
REFERENCES [dbo].[State] ([StateId])
GO
ALTER TABLE [dbo].[City] CHECK CONSTRAINT [FK_City_State]
GO
ALTER TABLE [dbo].[MovieGenre]  WITH CHECK ADD  CONSTRAINT [FK_MovieGenre_Genre] FOREIGN KEY([GenreId])
REFERENCES [dbo].[Genre] ([GenreId])
GO
ALTER TABLE [dbo].[MovieGenre] CHECK CONSTRAINT [FK_MovieGenre_Genre]
GO
ALTER TABLE [dbo].[MovieGenre]  WITH CHECK ADD  CONSTRAINT [FK_MovieGenre_Movie] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([MovieId])
GO
ALTER TABLE [dbo].[MovieGenre] CHECK CONSTRAINT [FK_MovieGenre_Movie]
GO
ALTER TABLE [dbo].[MovieLanguage]  WITH CHECK ADD  CONSTRAINT [FK_MovieLanguage_Language] FOREIGN KEY([LanguageId])
REFERENCES [dbo].[Language] ([LanguageId])
GO
ALTER TABLE [dbo].[MovieLanguage] CHECK CONSTRAINT [FK_MovieLanguage_Language]
GO
ALTER TABLE [dbo].[MovieLanguage]  WITH CHECK ADD  CONSTRAINT [FK_MovieLanguage_Movie] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([MovieId])
GO
ALTER TABLE [dbo].[MovieLanguage] CHECK CONSTRAINT [FK_MovieLanguage_Movie]
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Booking] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Booking] ([BookingId])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Booking]
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Customer] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[Customer] ([CustomerId])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Customer]
GO
ALTER TABLE [dbo].[Screen]  WITH CHECK ADD  CONSTRAINT [FK_Screen_ScreenType] FOREIGN KEY([ScreenTypeId])
REFERENCES [dbo].[ScreenType] ([ScreenTypeId])
GO
ALTER TABLE [dbo].[Screen] CHECK CONSTRAINT [FK_Screen_ScreenType]
GO
ALTER TABLE [dbo].[Screen]  WITH CHECK ADD  CONSTRAINT [FK_Screen_Theatre] FOREIGN KEY([TheatreId])
REFERENCES [dbo].[Theatre] ([TheatreId])
GO
ALTER TABLE [dbo].[Screen] CHECK CONSTRAINT [FK_Screen_Theatre]
GO
ALTER TABLE [dbo].[ScreenSeat]  WITH CHECK ADD  CONSTRAINT [FK_SCREENSEAT_SCREEN] FOREIGN KEY([ScreenId])
REFERENCES [dbo].[Screen] ([ScreenId])
GO
ALTER TABLE [dbo].[ScreenSeat] CHECK CONSTRAINT [FK_SCREENSEAT_SCREEN]
GO
ALTER TABLE [dbo].[ScreenSeat]  WITH CHECK ADD  CONSTRAINT [FK_ScreenSeat_SeatType] FOREIGN KEY([SeatTypeId])
REFERENCES [dbo].[SeatType] ([SeatTypeId])
GO
ALTER TABLE [dbo].[ScreenSeat] CHECK CONSTRAINT [FK_ScreenSeat_SeatType]
GO
ALTER TABLE [dbo].[Show]  WITH CHECK ADD  CONSTRAINT [FK_Show_Movie] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([MovieId])
GO
ALTER TABLE [dbo].[Show] CHECK CONSTRAINT [FK_Show_Movie]
GO
ALTER TABLE [dbo].[Show]  WITH CHECK ADD  CONSTRAINT [FK_Show_MovieLanguage] FOREIGN KEY([MovieLangId])
REFERENCES [dbo].[MovieLanguage] ([MovieLangId])
GO
ALTER TABLE [dbo].[Show] CHECK CONSTRAINT [FK_Show_MovieLanguage]
GO
ALTER TABLE [dbo].[Show]  WITH CHECK ADD  CONSTRAINT [FK_Show_Screen] FOREIGN KEY([ScreenId])
REFERENCES [dbo].[Screen] ([ScreenId])
GO
ALTER TABLE [dbo].[Show] CHECK CONSTRAINT [FK_Show_Screen]
GO
ALTER TABLE [dbo].[Theatre]  WITH CHECK ADD  CONSTRAINT [FK_Theatre_City] FOREIGN KEY([CityId])
REFERENCES [dbo].[City] ([CityId])
GO
ALTER TABLE [dbo].[Theatre] CHECK CONSTRAINT [FK_Theatre_City]
GO
ALTER TABLE [dbo].[TicketSeat]  WITH CHECK ADD  CONSTRAINT [FK_TicketSeat_Booking] FOREIGN KEY([BookingId])
REFERENCES [dbo].[Booking] ([BookingId])
GO
ALTER TABLE [dbo].[TicketSeat] CHECK CONSTRAINT [FK_TicketSeat_Booking]
GO
ALTER TABLE [dbo].[TicketSeat]  WITH CHECK ADD  CONSTRAINT [FK_TicketSeat_ScreenSeat] FOREIGN KEY([SeatId])
REFERENCES [dbo].[ScreenSeat] ([SeatId])
GO
ALTER TABLE [dbo].[TicketSeat] CHECK CONSTRAINT [FK_TicketSeat_ScreenSeat]
GO
/****** Object:  StoredProcedure [dbo].[AddBooking]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[AddBooking]
@showid INT,
@count INT,
@custid INT,
@cost MONEY,
@ticket AS TicketSeat READONLY,
@payment AS Pay READONLY
AS
	BEGIN
	INSERT INTO Booking(ShowId,BookingCount,CustomerId,TotalCost)
		VALUES (@showid,@count,@custid,@cost)
	DECLARE @bid INT=SCOPE_IDENTITY()

	INSERT INTO TicketSeat(SeatId,BookingId,UnitCost)
	SELECT seat,@bid,cost FROM @ticket

	INSERT INTO Payment(PaymentType,CustomerId,BookingId,TotalDue,CardNo)
	SELECT paytype,cust,@bid,total,cardn FROM @payment
	
	END

GO
/****** Object:  StoredProcedure [dbo].[AddCustomer]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddCustomer]
	@custname VARCHAR(30),
	@pwd VARCHAR(30),
	@email VARCHAR(30) ,
	@phone BIGINT
AS
	BEGIN
	INSERT INTO Customer (CustomerName,[Password],EmailId,Phone)
		VALUES (@custname,@pwd,@email,@phone)
	end
	
GO
/****** Object:  StoredProcedure [dbo].[AddGenre]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddGenre]
	@gen VARCHAR(30)
AS
	BEGIN
	INSERT INTO Genre(GenreName)
		VALUES (@gen)
	END
GO
/****** Object:  StoredProcedure [dbo].[AddLanguage]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddLanguage]
	@lang VARCHAR(30)
AS
	BEGIN
	INSERT INTO Language(LanguageName)
		VALUES (@lang)
	END
GO
/****** Object:  StoredProcedure [dbo].[AddLocation]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddLocation]
	@statename VARCHAR(30),
	@pin INT,
	@citystatename AS CityState READONLY
AS 
	BEGIN 
	DECLARE @stateval TABLE
	( 
		[sid] INT,
		sname VARCHAR(30)
	)
	INSERT INTO State(StateName) 
	OUTPUT INSERTED.StateId, INSERTED.StateName INTO @stateval
	VALUES (@statename)

	INSERT INTO City(CityName,StateId,Pincode)
		SELECT c.city,s.sid,@pin
		FROM @citystatename c
		INNER JOIN @stateval s
			ON c.state=s.sname

	END
GO
/****** Object:  StoredProcedure [dbo].[AddMovie]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddMovie]
@movname VARCHAR(MAX),
@desc VARCHAR(MAX),
@dir VARCHAR(MAX),
@dur TIME,
@release DATE,
@langid AS IdVal READONLY,
@genid AS IdVal READONLY
AS
	BEGIN
	INSERT INTO Movie(MovieName,Description,Director,Duration,ReleaseDate)
	VALUES (@movname,@desc,@dir,@dur,@release)
	DECLARE @movid INT =SCOPE_IDENTITY()

	INSERT INTO MovieLanguage
	SELECT @movid,id FROM @langid

	INSERT INTO MovieGenre
	SELECT @movid,id FROM @genid

	END
GO
/****** Object:  StoredProcedure [dbo].[AddScreenType]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddScreenType]
	@type VARCHAR(30)
AS
	BEGIN
	INSERT INTO ScreenType(ScreenTypeName)
		VALUES (@type)
	END
GO
/****** Object:  StoredProcedure [dbo].[AddSeatType]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddSeatType]
	@type VARCHAR(30),
	@price MONEY
AS
	BEGIN
	INSERT INTO SeatType(SeatTypeName,SeatPrice)
		VALUES (@type,@price)
	END
GO
/****** Object:  StoredProcedure [dbo].[AddShow]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddShow]
@date DATE,
@start TIME,
@end TIME,
@movie INT,
@screen INT,
@lang INT
AS 
	BEGIN
	INSERT INTO Show(ShowDate,StartTime,EndTime,MovieId,ScreenId,MovieLangId)
		VALUES(@date,@start,@end,@movie,@screen,@lang)
	END
GO
/****** Object:  StoredProcedure [dbo].[AddTheatre]    Script Date: 24-07-2023 17:25:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[AddTheatre]
@tname VARCHAR(30),
@cityid INT,
@screencount INT,
@screen AS Screen READONLY,
@seat AS Seat READONLY
AS
	BEGIN
	INSERT INTO Theatre(TheatreName,CityId,ScreenCount) 
		VALUES (@tname,@cityid,@screencount)
	DECLARE @tid INT=SCOPE_IDENTITY()

	DECLARE @temp TABLE
	(
		[sid] INT,
		[name] VARCHAR(30)
	)

	INSERT INTO Screen(ScreenName,TheatreId,TotalSeatCount,ScreenTypeId)
		OUTPUT INSERTED.ScreenId,INSERTED.ScreenName INTO @temp
		SELECT sname, @tid, seatcount,typeid FROM @screen

	INSERT INTO ScreenSeat(SeatName,SeatTypeId,ScreenId)
		SELECT s.seatname,s.seattype,t.sid
		FROM @temp t 
		INNER JOIN @seat s
			ON t.name=s.screenname

	END
GO
